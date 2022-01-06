const notificationTypeToClass: Record<string, string> = {
  error: "bg-red-300",
  success: "bg-green-400 text-white",
  warning: "bg-yellow-400",
};

interface NotificationBadgeProps {
  msg: string;
  type: string;
  onClose: () => void;
}

export default function NotificationBadge({
  type,
  msg,
  onClose,
}: NotificationBadgeProps) {
  return (
    <div
      className={`flex flex-row justify-between p-3 w-full rounded-lg ${notificationTypeToClass[type]}`}
    >
      <h1>{msg}</h1>
      <button
        onClick={() => {
          onClose();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
