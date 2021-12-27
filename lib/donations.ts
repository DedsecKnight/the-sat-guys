interface Donation {
  date: Date;
  category: string;
  status: "Pending Approval" | "Rejected" | "Approved";
}

export const mockDonations: Donation[] = [
  {
    date: new Date(2020, 3, 20),
    category: "Math (No Calculator)",
    status: "Pending Approval",
  },
  {
    date: new Date(2020, 3, 20),
    category: "Reading",
    status: "Rejected",
  },
  {
    date: new Date(2020, 3, 20),
    category: "Math (Calculator)",
    status: "Approved",
  },
];

export const mockCorrectAnswerSelect = {
  name: "correctAnswer",
  defaultValue: "",
  defaultOption: "Select your question's correct answer",
  options: [
    {
      value: "a",
      option: "A",
    },
    {
      value: "b",
      option: "B",
    },
    {
      value: "c",
      option: "C",
    },
    {
      value: "d",
      option: "D",
    },
  ],
};
