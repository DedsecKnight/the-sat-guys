import Link from "next/link";
import { useEffect } from "react";
import { useNotificationContext } from "../context-api/NotificationContext";

interface ThankYouProps {
  onDonateAnother: () => void;
}

export default function ThankYou({ onDonateAnother }: ThankYouProps) {
  return (
    <>
      <div className="mx-auto my-10 rounded-xl p-6 w-full">
        <h1 className="text-3xl font-bold text-center">
          Thank you for your donation
        </h1>
        <h1 className="text-lg text-center my-2">
          Your question will be moderated by our team and we will reach out to
          you shortly about your approval status.
        </h1>
      </div>
      <div className="flex flex-row gap-x-2 justify-end">
        <button
          type="button"
          className="rounded-lg bg-green-400 p-3 text-white"
          onClick={() => {
            onDonateAnother();
          }}
        >
          Donate another question
        </button>
        <Link href="/">
          <button
            type="button"
            className="rounded-lg bg-green-400 p-3 text-white"
          >
            Back To Dashboard
          </button>
        </Link>
      </div>
    </>
  );
}
