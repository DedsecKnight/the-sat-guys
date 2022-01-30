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
    isCondition: boolean;
  }>;
}

export interface SubmitQuestionConfig {
  topic: string;
  difficulty: string;
  section: string;
  qtype: string;
  question: {
    question: string;
    image: string | ArrayBuffer;
  };
  answers: Array<{
    answer: string;
    isCorrect: boolean;
    image: string | ArrayBuffer;
    isCondition: boolean;
  }>;
}
