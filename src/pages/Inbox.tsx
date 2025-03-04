import { BiFilter } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import EmailList from "../components/EmailList";

const Inbox = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col z-1">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-semibold text-gray-800">Inbox</h2>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded hover:bg-gray-100">
                <BiFilter className="w-5 h-5 text-gray-500" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-100">
                <BsArrowDown className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="px-4 pb-2 text-sm text-gray-500">10 messages</div>
        </div>

        {/* List of emails */}
        <div>
          <EmailList />
        </div>
      </div>
    </>
  );
};

export default Inbox;
