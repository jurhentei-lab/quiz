const STOP_WORDS = new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "to",
  "for",
  "of",
  "in",
  "on",
  "at",
  "with",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "this",
  "that",
  "these",
  "those",
  "as",
  "by",
  "from",
  "it",
  "its",
  "they",
  "their",
  "we",
  "our",
  "you",
  "your",
  "бол",
  "ба",
  "бөгөөд",
  "нь",
  "гэж",
  "гэсэн",
  "энэ",
  "тэр",
  "байна",
  "байв",
  "болно",
  "дээр",
  "доор",
  "тухай",
]);

const shuffle = (items) => {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const isMongolianText = (value) => /[А-Яа-яӨөҮүЁё]/.test(value);

const normalizeSentence = (sentence) => sentence.replace(/\s+/g, " ").trim();

const splitSentences = (text) =>
  text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map(normalizeSentence)
    .filter((sentence) => sentence.length > 35);

const getKeywords = (text) => {
  const words = text.match(/\p{L}+/gu) ?? [];
  const counts = new Map();

  for (const raw of words) {
    const word = raw.toLowerCase();
    if (word.length < 4 || STOP_WORDS.has(word)) {
      continue;
    }
    counts.set(word, (counts.get(word) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort((a, b) => {
      if (b[1] !== a[1]) {
        return b[1] - a[1];
      }
      return b[0].length - a[0].length;
    })
    .map(([word]) => word);
};

const sentenceHasWord = (sentence, word) => {
  const pattern = new RegExp(`(^|\\P{L})${escapeRegExp(word)}(?=\\P{L}|$)`, "iu");
  return pattern.test(sentence);
};

const replaceWordInSentence = (sentence, word, nextWord) => {
  const pattern = new RegExp(`(^|\\P{L})(${escapeRegExp(word)})(?=\\P{L}|$)`, "iu");
  return sentence.replace(pattern, `$1${nextWord}`);
};

const getSentenceKeyword = (sentence, keywords) =>
  keywords.find((keyword) => sentenceHasWord(sentence, keyword) && keyword.length > 4) ?? null;

const pickDistractorKeywords = (answer, sentence, keywords) =>
  shuffle(
    keywords.filter((keyword) => {
      if (keyword.toLowerCase() === answer.toLowerCase()) {
        return false;
      }

      if (sentenceHasWord(sentence, keyword)) {
        return false;
      }

      return Math.abs(keyword.length - answer.length) <= 7;
    }),
  ).slice(0, 3);

const buildStatementQuestion = (sentence, keywords, isMongolian) => {
  const answerWord = getSentenceKeyword(sentence, keywords);
  if (!answerWord) {
    return null;
  }

  const distractors = pickDistractorKeywords(answerWord, sentence, keywords);
  if (distractors.length < 3) {
    return null;
  }

  const wrongOptions = distractors.map((word) => replaceWordInSentence(sentence, answerWord, word));

  return {
    question: isMongolian
      ? "Текстийн агуулгатай яг тохирох өгүүлбэр аль нь вэ?"
      : "Which statement accurately matches the text?",
    options: shuffle([sentence, ...wrongOptions]),
    correctAnswer: sentence,
    explanation: isMongolian
      ? "Зөв хариулт нь текстэд яг тэр хэлбэрээрээ дурдагдсан өгүүлбэр юм."
      : "The correct option is the statement that appears in the source text.",
  };
};

const buildIncorrectStatementQuestion = (sentences, sentence, keywords, isMongolian) => {
  const answerWord = getSentenceKeyword(sentence, keywords);
  if (!answerWord || sentences.length < 4) {
    return null;
  }

  const distractors = pickDistractorKeywords(answerWord, sentence, keywords);
  if (distractors.length < 3) {
    return null;
  }

  const wrongStatement = replaceWordInSentence(sentence, answerWord, distractors[0]);
  const trueOptions = sentences.filter((item) => item !== sentence).slice(0, 3);

  if (trueOptions.length < 3) {
    return null;
  }

  return {
    question: isMongolian
      ? "Текстэд дурдаагүй эсвэл буруу өгүүлбэр аль нь вэ?"
      : "Which statement is not supported by the text?",
    options: shuffle([wrongStatement, ...trueOptions]),
    correctAnswer: wrongStatement,
    explanation: isMongolian
      ? "Зөв хариулт нь текстийн мэдээллийг өөрчилсөн тул буруу өгүүлбэр болсон."
      : "The correct option changes the source information, so it is not supported by the text.",
  };
};

const buildTopicQuestion = (title, keywords, isMongolian) => {
  const cleanedTitle = title.trim();
  if (!cleanedTitle || keywords.length < 4) {
    return null;
  }

  const distractors = shuffle(
    keywords
      .filter((keyword) => !cleanedTitle.toLowerCase().includes(keyword.toLowerCase()))
      .slice(0, 6),
  )
    .slice(0, 3)
    .map((keyword) => (isMongolian ? `${keyword}-ийн тухай` : `About ${keyword}`));

  if (distractors.length < 3) {
    return null;
  }

  return {
    question: isMongolian ? "Энэ текстийн гол сэдэв аль нь вэ?" : "What is the main topic of this text?",
    options: shuffle([cleanedTitle, ...distractors]),
    correctAnswer: cleanedTitle,
    explanation: isMongolian
      ? "Гарчиг нь текстийн гол сэдвийг хамгийн шууд илэрхийлж байна."
      : "The title expresses the main topic of the text most directly.",
  };
};

const buildKeywordAssociationQuestion = (sentence, keywords, isMongolian) => {
  const answerWord = getSentenceKeyword(sentence, keywords);
  if (!answerWord) {
    return null;
  }

  const sentenceWithoutAnswer = normalizeSentence(
    sentence.replace(new RegExp(`(^|\\P{L})${escapeRegExp(answerWord)}(?=\\P{L}|$)`, "iu"), " "),
  );

  const distractors = pickDistractorKeywords(answerWord, sentence, keywords);
  if (distractors.length < 3 || sentenceWithoutAnswer.length < 20) {
    return null;
  }

  return {
    question: isMongolian
      ? `Дараах мэдээлэл ямар зүйлтэй холбоотой вэ?\n${sentenceWithoutAnswer}`
      : `What does this information refer to?\n${sentenceWithoutAnswer}`,
    options: shuffle([answerWord, ...distractors]),
    correctAnswer: answerWord,
    explanation: isMongolian
      ? "Текстийн энэ хэсэг зөв хариулттай шууд холбоотой мэдээллийг өгч байна."
      : "This part of the text directly refers to the correct answer.",
  };
};

const buildMentionedSentenceQuestion = (sentences, sentence, index, isMongolian) => {
  const distractors = sentences.filter((item) => item !== sentence).slice(0, 3);
  if (distractors.length < 3) {
    return null;
  }

  const prefix = sentence.split(/[,.!?]/)[0]?.trim() ?? sentence;
  const clue = prefix.length > 24 ? prefix : sentence.slice(0, 60).trim();

  return {
    question: isMongolian
      ? `${index + 1}-р баримтад тохирох өгүүлбэр аль нь вэ?\nСанамж: ${clue}...`
      : `Which sentence matches fact ${index + 1}?\nHint: ${clue}...`,
    options: shuffle([sentence, ...distractors]),
    correctAnswer: sentence,
    explanation: isMongolian
      ? "Санамж дахь баримтыг зөвхөн энэ өгүүлбэр бүрэн зөв илэрхийлж байна."
      : "Only this sentence fully matches the hinted fact from the text.",
  };
};

const fillMissingQuestions = (questions, sentences, isMongolian, maxQuestions) => {
  const filled = [...questions];

  for (let i = 0; i < sentences.length && filled.length < maxQuestions; i += 1) {
    const extra = buildMentionedSentenceQuestion(sentences, sentences[i], i, isMongolian);
    if (!extra) {
      continue;
    }
    filled.push(extra);
  }

  return dedupeQuestions(filled).slice(0, maxQuestions);
};

const dedupeQuestions = (questions) => {
  const seen = new Set();
  return questions.filter((question) => {
    const key = `${question.question}|${question.correctAnswer}|${question.options.join("|")}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};

const hasFourUniqueOptions = (options) => {
  return new Set(options.map((option) => option.trim().toLowerCase())).size === 4;
};

const questionLooksLowQuality = (question) => {
  if (question.question.trim().length < 12) {
    return true;
  }

  if (question.correctAnswer.trim().length < 2) {
    return true;
  }

  if (!hasFourUniqueOptions(question.options)) {
    return true;
  }

  return question.options.some((option) => option.trim().length < 2);
};

export const isValidQuestion = (value) => {
  if (!value || typeof value !== "object") {
    return false;
  }

  if (
    typeof value.question !== "string" ||
    !Array.isArray(value.options) ||
    value.options.length !== 4 ||
    typeof value.correctAnswer !== "string"
  ) {
    return false;
  }

  if (value.options.some((option) => typeof option !== "string")) {
    return false;
  }

  if (!value.options.includes(value.correctAnswer)) {
    return false;
  }

  return !questionLooksLowQuality(value);
};

export const createQuestionsFromText = (text, maxQuestions = 5, title = "") => {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (!cleaned) {
    return [];
  }

  const sentences = splitSentences(cleaned);
  const keywords = getKeywords(cleaned);
  const built = [];
  const isMongolian = isMongolianText(`${title} ${cleaned}`);

  const topicQuestion = buildTopicQuestion(title, keywords, isMongolian);
  if (topicQuestion) {
    built.push(topicQuestion);
  }

  for (const sentence of sentences) {
    if (built.length >= maxQuestions) {
      break;
    }

    const statementQuestion = buildStatementQuestion(sentence, keywords, isMongolian);
    if (statementQuestion) {
      built.push(statementQuestion);
    }

    if (built.length >= maxQuestions) {
      break;
    }

    const incorrectStatementQuestion = buildIncorrectStatementQuestion(
      sentences,
      sentence,
      keywords,
      isMongolian,
    );
    if (incorrectStatementQuestion) {
      built.push(incorrectStatementQuestion);
    }

    if (built.length >= maxQuestions) {
      break;
    }

    const associationQuestion = buildKeywordAssociationQuestion(sentence, keywords, isMongolian);
    if (associationQuestion) {
      built.push(associationQuestion);
    }
  }

  const deduped = dedupeQuestions(built);
  if (deduped.length >= maxQuestions) {
    return deduped.slice(0, maxQuestions);
  }

  return fillMissingQuestions(deduped, sentences, isMongolian, maxQuestions);
};
