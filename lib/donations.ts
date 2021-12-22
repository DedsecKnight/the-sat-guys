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
