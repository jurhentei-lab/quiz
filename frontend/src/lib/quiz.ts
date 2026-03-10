export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
};

const hasFourUniqueOptions = (options: string[]): boolean => {
  return new Set(options.map((option) => option.trim().toLowerCase())).size === 4;
};

export const isValidQuestion = (value: unknown): value is QuizQuestion => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as QuizQuestion;
  if (
    typeof candidate.question !== "string" ||
    !Array.isArray(candidate.options) ||
    candidate.options.length !== 4 ||
    typeof candidate.correctAnswer !== "string"
  ) {
    return false;
  }

  if (candidate.options.some((option) => typeof option !== "string")) {
    return false;
  }

  if (!candidate.options.includes(candidate.correctAnswer)) {
    return false;
  }

  return hasFourUniqueOptions(candidate.options);
};
