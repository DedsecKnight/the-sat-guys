export interface ExamConfig {
  exam_id: string;
  sections: Record<string, ExamQuestion[]>;
}

export interface ExamQuestion {
  question_id: string;
  question_image: string;
  question_statement: string;
  question_type: "mc" | "fr";
  is_condition: boolean;
  answer_statement: string[];
  answer_image: string[];
}
