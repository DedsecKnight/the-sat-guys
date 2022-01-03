export interface ExamConfig {
  topic: string;
  difficulty: string;
  section: string;
  qtype: string;
  question: {
    question: string;
    image: any;
  };
  answers: Array<{
    answer: string;
    isCorrect: boolean;
    image: any;
  }>;
}
