"use client";

type AnalyticsPanelProps = {
  questionCount: number;
  score: number;
  attentionScore: number;
  attentionState: string;
};

const analytics = [
  {
    label: "Generated Questions",
    key: "questions",
  },
  {
    label: "Quiz Score",
    key: "score",
  },
  {
    label: "Attention Score",
    key: "attention",
  },
];

export default function AnalyticsPanel({
  questionCount,
  score,
  attentionScore,
  attentionState,
}: AnalyticsPanelProps) {
  const values: Record<string, string> = {
    questions: `${questionCount}`,
    score: `${score}%`,
    attention: `${attentionScore}%`,
  };

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {analytics.map((item) => (
        <div
          key={item.key}
          className="rounded-[1.75rem] border border-white/70 bg-white/75 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.07)] backdrop-blur"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            {item.label}
          </p>
          <p className="mt-3 text-3xl font-semibold text-slate-950">{values[item.key]}</p>
          {item.key === "attention" && (
            <p className="mt-2 text-sm text-slate-500">State: {attentionState}</p>
          )}
        </div>
      ))}
    </section>
  );
}
