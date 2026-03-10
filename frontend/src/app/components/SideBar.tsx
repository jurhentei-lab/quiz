"use client";

import { useEffect, useMemo, useState } from "react";
import { isValidQuestion, type QuizQuestion } from "@/lib/quiz";

type QuizHistoryItem = {
  id: string;
  title: string;
  content: string;
  questions: QuizQuestion[];
  createdAt: string;
};

const STORAGE_KEY = "quiz_generator_history_v1";
const OPTION_LABELS = ["A", "B", "C", "D"];
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "http://localhost:4000";

const normalizeHistory = (rawItems: unknown): QuizHistoryItem[] => {
  if (!Array.isArray(rawItems)) {
    return [];
  }

  return rawItems
    .map((item) => {
      if (!item || typeof item !== "object") {
        return null;
      }

      const entry = item as {
        id?: unknown;
        title?: unknown;
        content?: unknown;
        questions?: unknown;
        createdAt?: unknown;
      };

      if (
        typeof entry.id !== "string" ||
        typeof entry.title !== "string" ||
        typeof entry.content !== "string" ||
        typeof entry.createdAt !== "string"
      ) {
        return null;
      }

      if (Array.isArray(entry.questions) && entry.questions.every(isValidQuestion)) {
        return {
          id: entry.id,
          title: entry.title,
          content: entry.content,
          questions: entry.questions,
          createdAt: entry.createdAt,
        };
      }

      if (Array.isArray(entry.questions) && entry.questions.every((q) => typeof q === "string")) {
        const upgraded = entry.questions.map((q) => {
          const fallback = ["Option A", "Option B", "Option C", "Option D"];
          return {
            question: q,
            options: fallback,
            correctAnswer: "Option A",
          };
        });

        return {
          id: entry.id,
          title: entry.title,
          content: entry.content,
          questions: upgraded,
          createdAt: entry.createdAt,
        };
      }

      return null;
    })
    .filter((item): item is QuizHistoryItem => item !== null);
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [history, setHistory] = useState<QuizHistoryItem[]>([]);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationSource, setGenerationSource] = useState<"ai" | "fallback" | "">("");
  const [generatedInputKey, setGeneratedInputKey] = useState("");
  const [activeHistoryId, setActiveHistoryId] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      const normalized = normalizeHistory(parsed);
      setHistory(normalized);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const canGenerate = useMemo(() => {
    return title.trim().length > 0 && content.trim().length > 20;
  }, [title, content]);

  const currentInputKey = useMemo(() => {
    return `${title.trim()}:::${content.trim()}`;
  }, [title, content]);

  const isGeneratedForCurrentInput = generatedInputKey.length > 0 && generatedInputKey === currentInputKey;

  const saveHistory = (items: QuizHistoryItem[]) => {
    setHistory(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  const clearForm = () => {
    setTitle("");
    setContent("");
    setQuestions([]);
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setError("");
    setGenerationSource("");
    setGeneratedInputKey("");
    setActiveHistoryId("");
  };

  const deleteHistoryItem = (id: string) => {
    const nextHistory = history.filter((item) => item.id !== id);
    saveHistory(nextHistory);
    if (activeHistoryId === id) {
      clearForm();
    }
  };

  const handleGenerate = async () => {
    if (!canGenerate) {
      setError("Гарчиг болон хамгийн багадаа 20 тэмдэгттэй текст оруулна уу.");
      return;
    }

    setIsGenerating(true);
    setError("");
    setGenerationSource("");

    let generatedQuestions: QuizQuestion[] = [];
    try {
      const response = await fetch(`${API_BASE_URL}/api/article`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          text: content,
        }),
      });

      const data = (await response.json()) as {
        questions?: QuizQuestion[];
        error?: string;
        source?: "ai" | "fallback";
      };
      if (!response.ok) {
        setError(data.error ?? "Failed to generate quiz.");
        return;
      }

      generatedQuestions = Array.isArray(data.questions) ? data.questions : [];
      if (generatedQuestions.length < 5) {
        setError("5 асуулт үүсгэж чадсангүй. Илүү дэлгэрэнгүй өгүүлбэр оруулаад дахин оролдоно уу.");
        return;
      }
      setGenerationSource(data.source ?? "");
    } catch {
      setError("Backend эсвэл AI үйлчилгээ алдаа өглөө. Дахин оролдоно уу.");
      return;
    } finally {
      setIsGenerating(false);
    }

    setQuestions(generatedQuestions);
    setCurrentIndex(0);
    setSelectedAnswers(new Array(generatedQuestions.length).fill(""));
    setShowResult(false);
    setGeneratedInputKey(currentInputKey);
    setActiveHistoryId("");
  };

  const loadHistoryItem = (item: QuizHistoryItem) => {
    setTitle(item.title);
    setContent(item.content);
    setQuestions(item.questions);
    setCurrentIndex(0);
    setSelectedAnswers(new Array(item.questions.length).fill(""));
    setShowResult(false);
    setError("");
    setGenerationSource("");
    setGeneratedInputKey(`${item.title.trim()}:::${item.content.trim()}`);
    setActiveHistoryId(item.id);
  };

  const handleSelect = (option: string) => {
    setSelectedAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = option;
      return next;
    });
  };

  const handleNext = () => {
    if (currentIndex >= questions.length - 1) {
      if (!activeHistoryId && title.trim() && content.trim() && questions.length > 0) {
        const newItem: QuizHistoryItem = {
          id: `${Date.now()}`,
          title: title.trim(),
          content: content.trim(),
          questions,
          createdAt: new Date().toISOString(),
        };
        const nextHistory = [newItem, ...history].slice(0, 30);
        saveHistory(nextHistory);
        setActiveHistoryId(newItem.id);
      }

      setShowResult(true);
      setTitle("");
      setContent("");
      setGeneratedInputKey("");
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const correctCount = questions.reduce((count, question, index) => {
    return selectedAnswers[index] === question.correctAnswer ? count + 1 : count;
  }, 0);

  const activeQuestion = questions[currentIndex];
  const selectedCurrent = selectedAnswers[currentIndex] ?? "";

  return (
    <div className="flex min-h-[calc(100vh-56px)]">
      <div
        className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "w-72" : "w-0"
        }`}
      >
        <div className="p-4 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Түүх</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={clearForm}
                disabled={!title && !content && questions.length === 0}
                className={`text-xs px-2 py-1 rounded border transition-colors ${
                  title || content || questions.length > 0
                    ? "border-red-200 text-red-600 hover:bg-red-50"
                    : "border-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Цэвэрлэх
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-gray-100 rounded-lg p-1 transition-colors"
                aria-label="Close history"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7.97021 2V22M14.9702 9.44L12.4102 12L14.9702 14.56M21.9702 15V9C21.9702 4 19.9702 2 14.9702 2H8.97021C3.97021 2 1.97021 4 1.97021 9V15C1.97021 20 3.97021 22 8.97021 22H14.9702C19.9702 22 21.9702 20 21.9702 15Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {history.length === 0 && <p className="text-sm text-gray-500">Хадгалсан quiz алга.</p>}
            {history.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-2 rounded-lg p-2 hover:bg-gray-100 transition-colors"
              >
                <button
                  onClick={() => loadHistoryItem(item)}
                  className="flex-1 text-left p-1"
                >
                  <p className="text-sm font-medium truncate">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{new Date(item.createdAt).toLocaleString()}</p>
                </button>
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    deleteHistoryItem(item.id);
                  }}
                  className="rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-500 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                  aria-label="Delete history item"
                >
                  Устгах
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex-1 overflow-y-auto bg-gray-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-lg transition-colors bg-white border border-gray-200"
            aria-label="Open history"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M7.97021 2V22M14.9702 9.44L12.4102 12L14.9702 14.56M21.9702 15V9C21.9702 4 19.9702 2 14.9702 2H8.97021C3.97021 2 1.97021 4 1.97021 9V15C1.97021 20 3.97021 22 8.97021 22H14.9702C19.9702 22 21.9702 20 21.9702 15Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <div className="min-h-full p-8">
          <div className="max-w-2xl mx-auto mt-12 mb-8 bg-white rounded-lg border border-gray-300 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="font-semibold">AI Асуулт Бэлтгэгч</h3>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Гарчиг болон өгүүлбэрээ оруулна. AI тухайн текстээс 5 асуулт бэлдэж, та хариулаад төгсгөлд нь зөв хариуг харна.
            </p>

            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">Гарчиг</label>
                <input
                  type="text"
                  placeholder="Жишээ нь: Нарны аймгийн тухай"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">Өгүүлбэр / Текст</label>
                <textarea
                  placeholder="Эндээс AI асуулт үүсгэх текстээ оруулна..."
                  rows={8}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={!canGenerate || isGenerating || isGeneratedForCurrentInput}
                className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                  canGenerate && !isGenerating && !isGeneratedForCurrentInput
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {isGenerating
                  ? "AI асуулт үүсгэж байна..."
                  : isGeneratedForCurrentInput
                    ? "5 асуулт аль хэдийн үүссэн"
                    : "5 асуулт үүсгэх"}
              </button>

              {error && <p className="text-sm text-red-600">{error}</p>}
              {isGeneratedForCurrentInput && !error && (
                <p className="text-sm text-gray-600">
                  Энэ текст дээр асуулт аль хэдийн үүссэн. Дахин үүсгэх бол гарчиг эсвэл текстээ өөрчилнө үү.
                </p>
              )}
              {questions.length > 0 && !error && generationSource && (
                <p className="text-sm text-gray-600">
                  {generationSource === "ai"
                    ? "AI 5 асуултыг амжилттай бэлдлээ."
                    : "AI боломжгүй тул текстээс автоматаар 5 асуулт бэлдлээ."}
                </p>
              )}

              {questions.length > 0 && !showResult && activeQuestion && (
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-4">
                  <p className="text-sm text-gray-500">
                    Асуулт {currentIndex + 1} / {questions.length}
                  </p>
                  <h4 className="font-medium text-gray-900">{activeQuestion.question}</h4>

                  <div className="space-y-2">
                    {activeQuestion.options.map((option, index) => {
                      const isSelected = selectedCurrent === option;
                      return (
                        <button
                          key={`${option}-${index}`}
                          onClick={() => handleSelect(option)}
                          className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition-colors ${
                            isSelected
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-300 hover:bg-white"
                          }`}
                        >
                          <span className="font-semibold mr-2">{OPTION_LABELS[index]}.</span>
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={!selectedCurrent}
                    className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCurrent
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {currentIndex === questions.length - 1 ? "Дуусгах" : "Дараагийн асуулт"}
                  </button>
                </div>
              )}

              {questions.length > 0 && showResult && (
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3">
                  <h4 className="font-semibold text-gray-900">Үр дүн</h4>
                  <p className="text-sm text-gray-700">
                    Зөв: {correctCount} / {questions.length} | Буруу: {questions.length - correctCount}
                  </p>

                  <div className="space-y-2">
                    {questions.map((question, index) => {
                      const userAnswer = selectedAnswers[index] || "(Хариулаагүй)";
                      const isCorrect = userAnswer === question.correctAnswer;

                      return (
                        <div key={`${question.question}-${index}`} className="rounded-lg border border-gray-200 bg-white p-3">
                          <p className="text-sm font-medium">{index + 1}. {question.question}</p>
                          <p className={`text-sm mt-1 ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                            Таны хариулт: {userAnswer}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-green-700">Зөв хариулт: {question.correctAnswer}</p>
                          )}
                          {question.explanation && (
                            <p className="text-sm text-gray-600 mt-2">Тайлбар: {question.explanation}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => {
                      clearForm();
                    }}
                    className="w-full py-2 rounded-lg text-sm font-medium bg-black text-white hover:bg-gray-800"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
