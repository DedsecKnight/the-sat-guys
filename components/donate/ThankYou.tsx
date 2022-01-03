import Link from "next/link";

export default function ThankYou() {
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
      <div className="flex flex-row justify-end">
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
