"use client";

type TextComposerProps = {
  title: string;
  text: string;
  loading: boolean;
  onTitleChange: (value: string) => void;
  onTextChange: (value: string) => void;
  onGenerate: () => void;
};

export default function TextComposer({
  title,
  text,
  loading,
  onTitleChange,
  onTextChange,
  onGenerate,
}: TextComposerProps) {
  const canGenerate = title.trim().length > 0 && text.trim().length > 40;

  return (
    <section className="rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-[0_30px_80px_rgba(20,24,40,0.10)] backdrop-blur">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Study Input
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Paste your material</h2>
        </div>
        <div className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white">
          {text.trim().split(/\s+/).filter(Boolean).length} words
        </div>
      </div>

      <div className="space-y-4">
        <input
          value={title}
          onChange={(event) => onTitleChange(event.target.value)}
          placeholder="Topic title"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400"
        />

        <textarea
          value={text}
          onChange={(event) => onTextChange(event.target.value)}
          rows={12}
          placeholder="Paste study notes, article, chapter summary, or lecture material here..."
          className="w-full resize-none rounded-[1.5rem] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-amber-400"
        />

        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">
            AI generates 5 MCQs, 4 options each, with the correct answer and explanation.
          </p>
          <button
            onClick={onGenerate}
            disabled={!canGenerate || loading}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
              canGenerate && !loading
                ? "bg-slate-950 text-white hover:bg-slate-800"
                : "cursor-not-allowed bg-slate-200 text-slate-500"
            }`}
          >
            {loading ? "Generating..." : "Generate Quiz"}
          </button>
        </div>
      </div>
    </section>
  );
}
