import { createServer } from "node:http";
import { createQuestionsFromText, isValidQuestion } from "./quiz.mjs";
import quizController from "./controller/quiz/quiz.js";

const PORT = Number(process.env.PORT || 4000);
const { generateQuizFromArticle } = quizController;

const sendJson = (response, statusCode, payload) => {
  response.writeHead(statusCode, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  });
  response.end(JSON.stringify(payload));
};

const parseBody = async (request) => {
  let raw = "";
  for await (const chunk of request) {
    raw += chunk;
  }

  if (!raw) {
    return {};
  }

  return JSON.parse(raw);
};

const generateWithHuggingFace = async (title, text) => {
  if (!process.env.OPENAI_API_KEY) {
    return { questions: createQuestionsFromText(text, 5, title), source: "fallback" };
  }

  try {
    const questions = await generateQuizFromArticle({
      title,
      text,
      isValidQuestion,
    });

    if (questions.length === 0) {
      return { questions: createQuestionsFromText(text, 5, title), source: "fallback" };
    }

    return { questions, source: "ai" };
  } catch {
    return { questions: createQuestionsFromText(text, 5, title), source: "fallback" };
  }
};

const server = createServer(async (request, response) => {
  if (!request.url) {
    sendJson(response, 404, { error: "Not found." });
    return;
  }

  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (request.method === "GET" && request.url === "/health") {
    sendJson(response, 200, { ok: true });
    return;
  }

  if (request.method !== "POST" || request.url !== "/api/article") {
    sendJson(response, 404, { error: "Not found." });
    return;
  }

  try {
    const body = await parseBody(request);
    const title = typeof body.title === "string" ? body.title.trim() : "";
    const text = typeof body.text === "string" ? body.text.trim() : "";

    if (text.length < 20) {
      sendJson(response, 400, { error: "Please provide at least 20 characters of text." });
      return;
    }

    const result = await generateWithHuggingFace(title, text);
    sendJson(response, 200, result);
  } catch {
    sendJson(response, 500, { questions: [], error: "Failed to generate quiz." });
  }
});

server.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
