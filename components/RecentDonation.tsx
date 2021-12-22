import RecentTab from "./RecentTab";
import { mockDonations } from "../lib/donations";
import { Badge } from "./Badge";

export default function RecentDonation() {
  return (
    <RecentTab title="Recent Donation">
      {mockDonations.map((donation) => (
        <Badge
          color={
            donation.status == "Pending Approval"
              ? "yellow"
              : donation.status == "Approved"
              ? "green"
              : "red"
          }
        >
          <h1>{donation.date.toLocaleDateString()}</h1>
          <h1>{donation.category} Question</h1>
          <h1>{donation.status}</h1>
          <button
            className="bg-white text-black px-2 py-1 rounded-lg"
            type="button"
          >
            View Question{" "}
          </button>
        </Badge>
      ))}
    </RecentTab>
  );
}
