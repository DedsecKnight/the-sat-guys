export interface QuestionConfig {
  topic: string;
  difficulty: string;
  section: string;
  qtype: string;
  question: {
    question: string;
    image: File | null;
  };
  answers: Array<{
    answer: string;
    isCorrect: boolean;
    image: File | null;
  }>;
}
