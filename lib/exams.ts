interface Exam {
  id: string;
  category: string;
  time: string;
  score: number;
}

export const mockExam: Exam[] = [
  {
    id: "x1234sd",
    category: "Math (no calculator)",
    time: "00:30:23",
    score: 90,
  },
  {
    id: "x5435dc",
    category: "Math (no calculator)",
    time: "00:30:23",
    score: 60,
  },
  {
    id: "x5435dc",
    category: "Math (no calculator)",
    time: "00:30:23",
    score: 20,
  },
];
