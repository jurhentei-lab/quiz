"use client";

import { useMemo, useState } from "react";
import type { QuizQuestion } from "@/lib/quiz";
import AnalyticsPanel from "./AnalyticsPanel";
import QuizRunner from "./QuizRunner";
import TextComposer from "./TextComposer";
import WebcamAttention from "./WebcamAttention";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "http://localhost:4000";

type AttentionSnapshot = {
  attentiveFrames: number;
  totalFrames: number;
  attentionScore: number;
  state: string;
};

export default function QuizStudio() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [attention, setAttention] = useState<AttentionSnapshot>({
    attentiveFrames: 0,
    totalFrames: 0,
    attentionScore: 0,
    state: "idle",
  });

  const scorePercent = useMemo(() => {
    if (questions.length === 0) {
      return 0;
    }

    const correctCount = questions.reduce((count, question, index) => {
      return answers[index] === question.correctAnswer ? count + 1 : count;
    }, 0);

    return Math.round((correctCount / questions.length) * 100);
  }, [answers, questions]);

  const handleGenerate = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/article`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, text }),
      });

      const data = (await response.json()) as {
        questions?: QuizQuestion[];
        error?: string;
      };

      if (!response.ok) {
        setError(data.error ?? "Failed to generate quiz.");
        return;
      }

      const nextQuestions = Array.isArray(data.questions) ? data.questions : [];
      if (nextQuestions.length !== 5) {
        setError("The AI did not return 5 complete questions. Try again with clearer material.");
        return;
      }

      setQuestions(nextQuestions);
      setAnswers(new Array(nextQuestions.length).fill(""));
      setCurrentIndex(0);
      setFinished(false);
    } catch {
      setError("Could not reach the AI service.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (option: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = option;
      return next;
    });
  };

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const handleRestart = () => {
    setAnswers(new Array(questions.length).fill(""));
    setCurrentIndex(0);
    setFinished(false);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(252,211,77,0.26),_transparent_28%),linear-gradient(180deg,_#f7f4ec_0%,_#eef2ff_52%,_#f8fafc_100%)] px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              AI Quiz Generator
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-slate-950">
              Turn study material into an interactive quiz with focus tracking.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Paste notes, generate 5 AI questions with explanations, answer them, and review your
              score alongside webcam-based attention analytics.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/60 bg-white/70 px-6 py-5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Stack
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Next.js App Router, TypeScript, TailwindCSS, OpenAI API, MediaPipe Face Landmarker
            </p>
          </div>
        </div>

        <AnalyticsPanel
          questionCount={questions.length}
          score={scorePercent}
          attentionScore={attention.attentionScore}
          attentionState={attention.state}
        />

        {error && (
          <div className="mt-6 rounded-[1.5rem] border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-700">
            {error}
          </div>
        )}

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <TextComposer
              title={title}
              text={text}
              loading={loading}
              onTitleChange={setTitle}
              onTextChange={setText}
              onGenerate={handleGenerate}
            />
            <QuizRunner
              questions={questions}
              currentIndex={currentIndex}
              selectedAnswers={answers}
              finished={finished}
              onSelect={handleSelect}
              onNext={handleNext}
              onRestart={handleRestart}
            />
          </div>

          <div className="space-y-6">
            <WebcamAttention onChange={setAttention} />
            <section className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Attention Analytics
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.25rem] bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Attentive Frames</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">
                    {attention.attentiveFrames}
                  </p>
                </div>
                <div className="rounded-[1.25rem] bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Observed Frames</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">{attention.totalFrames}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Attention score is estimated from face presence and whether your face landmarks stay
                centered toward the screen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
