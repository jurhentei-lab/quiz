const OpenAI = require("openai");

const containsMongolian = (value) => /[А-Яа-яӨөҮүЁё]/.test(value);
const containsLatin = (value) => /[A-Za-z]/.test(value);
const normalizeText = (value) => value.replace(/\s+/g, " ").trim();
const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const buildQuizPrompt = (title, text) => {
  const isMongolian = containsMongolian(`${title} ${text}`);

  if (isMongolian) {
    return [
      "Чи Монгол хэл дээр энгийн, ойлгомжтой quiz асуулт зохиогч.",
      "Өгөгдсөн текстээс яг 5 асуулт зохио.",
      "Шаардлага:",
      "- Асуулт бүр зөвхөн текстээс хариулагдах ёстой.",
      "- Асуулт бүр яг 4 сонголттой байна.",
      "- Зөвхөн 1 зөв хариулттай байна.",
      "- Асуулт, сонголт, зөв хариулт бүгд цэвэр Монгол хэл дээр байна.",
      "- Англи үг, англи өгүүлбэр, орчуулгын эвдэрхий хэллэг огт бүү ашигла.",
      "- Үг үсгийн алдаа, найруулгын эвдрэл, буруу холбоос огт бүү гарга.",
      "- Эхлээд текстээс 5 тодорхой баримт сонго: хүн, он сар, газар, тоо, нэр, үйл явдал, шинж, үүрэг.",
      "- Тэр баримтуудаас шууд асуулт асуу.",
      "- Жишээ: 'Хүслэн 2006 онд төрсөн.' -> 'Хүслэн хэдэн онд төрсөн бэ?'",
      "- Жишээ: 'Улаанбаатар бол Монгол Улсын нийслэл.' -> 'Монгол Улсын нийслэл аль хот вэ?'",
      "- Асуулт нь богино, ойлгомжтой, нэг утгатай байна.",
      "- Текстийг тэр чигт нь хуулж асуулт бүү болго.",
      "- Нэг үг таалгадаг, утгагүй, хоёрдмол утгатай асуулт бүү гарга.",
      "- Сонголтууд нь үнэмшилтэй боловч 3 нь буруу, 1 нь зөв байна.",
      "- Асуулт бүрт 1-2 өгүүлбэртэй богино тайлбар нэм.",
      "- Асуултын ихэнх нь 'хэн', 'хэзээ', 'хаана', 'юу', 'аль', 'хэд' гэсэн хэлбэртэй байж болно.",
      "- Буруу жишээ: 'Санчир гараг нь хэдийг алдартай?'",
      "- Буруу жишээ: 'Текстэд юу гэсэн бэ?'",
      "- Сайн жишээ: 'Хүслэн хэдэн онд төрсөн бэ?'",
      "- Сайн жишээ: 'Санчир гараг юугаараа алдартай вэ?'",
      '- Зөвхөн дараах JSON форматаар буцаа: {"questions":[{"question":"...","options":["...","...","...","..."],"correctAnswer":"...","explanation":"..."}]}',
      "",
      `Гарчиг: ${title || "Гарчиггүй"}`,
      `Текст: ${text}`,
    ].join("\n");
  }

  return [
    "You are an expert quiz writer for reading comprehension.",
    "Create exactly 5 high-quality multiple-choice questions from the article.",
    "Requirements:",
    "- Questions must be answerable only from the article text.",
    "- Each question must have exactly 4 options.",
    "- Exactly one option is correct.",
    "- Test comprehension, facts, relationships, causes, purposes, or key ideas.",
    "- Avoid low-quality filler questions, copied sentences, and obvious answers.",
    "- Avoid single-word guessing, broken phrasing, or nonsense questions.",
    "- Make distractors plausible but clearly wrong according to the text.",
    "- Include a short explanation for each answer.",
    "- Vary the question styles.",
    "- Keep wording concise and natural.",
    '- Return JSON only in format: {"questions":[{"question":"...","options":["...","...","...","..."],"correctAnswer":"...","explanation":"..."}]}',
    "",
    `Title: ${title || "Untitled"}`,
    `Article: ${text}`,
  ].join("\n");
};

const parseQuestions = (raw, isValidQuestion) => {
  const parsed = JSON.parse(raw);
  if (!parsed.questions || !Array.isArray(parsed.questions)) {
    return [];
  }

  return parsed.questions
    .filter(isValidQuestion)
    .map((question) => ({
      ...question,
      explanation:
        typeof question.explanation === "string" && question.explanation.trim().length > 0
          ? question.explanation.trim()
          : "",
    }))
    .slice(0, 5);
};

const looksBrokenMongolian = (value) => {
  const lowered = normalizeText(value.toLowerCase());
  return (
    lowered.includes("хэдийг") ||
    lowered.includes("нь нь") ||
    lowered.includes("бөгөөд хэд") ||
    (lowered.includes("байдаг?") && lowered.includes("хэд")) ||
    lowered.includes("аль нь нь") ||
    lowered.includes(" юү") ||
    lowered.includes("текстэд юу гэсэн бэ") ||
    lowered.includes("ямар зүйлтэй холбоотой вэ") ||
    lowered.includes("which ") ||
    lowered.includes("  ")
  );
};

const hasNaturalQuestionEnding = (value) => {
  const lowered = normalizeText(value.toLowerCase());
  return (
    lowered.endsWith("бэ?") ||
    lowered.endsWith("вэ?") ||
    lowered.endsWith("юу вэ?") ||
    lowered.endsWith("аль нь вэ?") ||
    lowered.endsWith("?")
  );
};

const isQuestionSetHighQuality = (questions, requireMongolian) => {
  if (questions.length < 5) {
    return false;
  }

  return questions.every((question) => {
    if (looksBrokenMongolian(question.question)) {
      return false;
    }

    if (question.question.trim().length < 18) {
      return false;
    }

    if (!question.explanation || normalizeText(question.explanation).length < 12) {
      return false;
    }

    if (requireMongolian && !hasNaturalQuestionEnding(question.question)) {
      return false;
    }

    if (question.options.some((option) => looksBrokenMongolian(option))) {
      return false;
    }

    if (question.options.some((option) => option.trim().length < 2)) {
      return false;
    }

    if (requireMongolian) {
      if (!containsMongolian(question.question) || containsLatin(question.question)) {
        return false;
      }

      if (!containsMongolian(question.correctAnswer) || containsLatin(question.correctAnswer)) {
        return false;
      }

      if (
        question.options.some((option) => !containsMongolian(option) || containsLatin(option))
      ) {
        return false;
      }
    }

    const normalizedOptions = question.options.map((option) => option.trim().toLowerCase());
    if (new Set(normalizedOptions).size !== 4) {
      return false;
    }

    return true;
  });
};

const generateQuizFromArticle = async ({ title, text, isValidQuestion }) => {
  const isMongolian = containsMongolian(`${title} ${text}`);
  if (!client) {
    return [];
  }

  const completion = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    temperature: 0.2,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: isMongolian
          ? "Зөвхөн хүчинтэй JSON буцаа. Markdown, тайлбар, англи текст бүү нэм."
          : "Return only valid JSON. No markdown.",
      },
      {
        role: "user",
        content: buildQuizPrompt(title, text),
      },
    ],
  });

  const content = completion.choices?.[0]?.message?.content ?? "";
  const questions = parseQuestions(content, isValidQuestion);
  return isQuestionSetHighQuality(questions, isMongolian) ? questions : [];
};

module.exports = {
  buildQuizPrompt,
  generateQuizFromArticle,
};
