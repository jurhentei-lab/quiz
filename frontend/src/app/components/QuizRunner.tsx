"use client";

import type { QuizQuestion } from "@/lib/quiz";

type QuizRunnerProps = {
  questions: QuizQuestion[];
  currentIndex: number;
  selectedAnswers: string[];
  finished: boolean;
  onSelect: (option: string) => void;
  onNext: () => void;
  onRestart: () => void;
};

export default function QuizRunner({
  questions,
  currentIndex,
  selectedAnswers,
  finished,
  onSelect,
  onNext,
  onRestart,
}: QuizRunnerProps) {
  if (questions.length === 0) {
    return (
      <section className="rounded-[2rem] border border-dashed border-slate-300 bg-white/60 p-8 text-center text-slate-500">
        Generate a quiz to start answering.
      </section>
    );
  }

  const correctCount = questions.reduce((count, question, index) => {
    return selectedAnswers[index] === question.correctAnswer ? count + 1 : count;
  }, 0);

  if (finished) {
    return (
      <section className="rounded-[2rem] border border-emerald-100 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Results
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Score {correctCount}/{questions.length}
            </h2>
          </div>
          <button
            onClick={onRestart}
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Retake
          </button>
        </div>

        <div className="space-y-4">
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[index] || "No answer";
            const isCorrect = userAnswer === question.correctAnswer;

            return (
              <div key={`${question.question}-${index}`} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">
                  {index + 1}. {question.question}
                </p>
                <p className={`mt-2 text-sm ${isCorrect ? "text-emerald-700" : "text-rose-700"}`}>
                  Your answer: {userAnswer}
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Correct answer: {question.correctAnswer}
                </p>
                {question.explanation && (
                  <p className="mt-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    {question.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  const activeQuestion = questions[currentIndex];
  const selected = selectedAnswers[currentIndex] ?? "";

  return (
    <section className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Quiz
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            Question {currentIndex + 1} of {questions.length}
          </h2>
        </div>
        <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">
          {Math.round(((currentIndex + 1) / questions.length) * 100)}%
        </div>
      </div>

      <p className="mb-5 text-lg font-medium text-slate-900">{activeQuestion.question}</p>

      <div className="space-y-3">
        {activeQuestion.options.map((option) => {
          const isActive = selected === option;
          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className={`w-full rounded-[1.25rem] border px-4 py-4 text-left text-sm transition ${
                isActive
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-800 hover:border-amber-400 hover:bg-amber-50"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="max-w-md text-sm text-slate-500">
          Explanations are shown after you finish all questions.
        </p>
        <button
          onClick={onNext}
          disabled={!selected}
          className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
            selected
              ? "bg-slate-950 text-white hover:bg-slate-800"
              : "cursor-not-allowed bg-slate-200 text-slate-500"
          }`}
        >
          {currentIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
        </button>
      </div>
    </section>
  );
}
