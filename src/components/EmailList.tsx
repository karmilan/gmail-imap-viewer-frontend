import { MdStar, MdStarOutline } from "react-icons/md";

const EmailList = () => {
  const emails = [
    {
      id: "1",
      from: "John Doe",
      subject: "Meeting Reminder",
      date: "Oct 10, 2023",
      preview: "Just a reminder that we have a meeting tomorrow at 10 AM.",
      read: false,
      starred: true,
      labels: ["Work", "Important"],
    },
    {
      id: "2",
      from: "Jane Smith",
      subject: "Project Update",
      date: "Oct 9, 2023",
      preview:
        "Here’s the latest update on the project. Let me know if you have any questions.",
      read: true,
      starred: false,
      labels: ["Project"],
    },
    {
      id: "3",
      from: "Support Team",
      subject: "Your Ticket has been Resolved",
      date: "Oct 8, 2023",
      preview:
        "We’ve resolved your recent support ticket. Thank you for your patience!",
      read: false,
      starred: false,
      labels: ["Support"],
    },
  ];

  return (
    <>
      <div className="flex-1 overflow-auto">
        {emails.map((email) => (
          <div
            key={email.id}
            className={`
        border-b border-gray-200 cursor-pointer transition-colors
        ${!email.read ? "bg-blue-50" : "bg-white"} 
        hover:bg-gray-50
      `}
          >
            <div className="p-4">
              <div className="flex items-start gap-3">
                {/* Star Button */}
                <button className="mt-0.5 flex-shrink-0">
                  {email.starred ? (
                    <MdStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ) : (
                    <MdStarOutline className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {/* Email Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    {/* Sender */}
                    <span
                      className={`font-medium truncate ${
                        !email.read ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {email.from}
                    </span>

                    {/* Date */}
                    <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                      {email.date}
                    </span>
                  </div>

                  {/* Subject */}
                  <h3
                    className={`text-sm mb-1 truncate ${
                      !email.read
                        ? "font-semibold text-gray-900"
                        : "text-gray-800"
                    }`}
                  >
                    {email.subject}
                  </h3>

                  {/* Preview */}
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    {email.preview}
                  </p>

                  {/* Labels */}
                  <div className="flex flex-wrap gap-1.5">
                    {email.labels.map((label) => (
                      <span
                        key={label}
                        className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmailList;
