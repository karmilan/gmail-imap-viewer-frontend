import { LuInbox, LuSend, LuStar } from "react-icons/lu";

type SidebarProps = {
  sidebarOpen?: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen }) => {
  return (
    <>
      <div
        className={`h-full w-[15%] ${
          sidebarOpen ? "flex" : "hidden"
        } sm:flex flex-col bg-white overflow-y-auto`}
      >
        {/* <div className="p-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 transition-colors">
            <LuPenLine className="w-5 h-5" />
            <span className="font-medium">Compose</span>
          </button>
        </div> */}

        <nav className="flex-1 px- pb-4 mt-8">
          <button className="w-full text-left px-4 py-2.5 my-1 rounded-lg flex items-center justify-between transition-colors duration-150 text-gray-700 hover:bg-gray-100">
            <div className="flex items-center gap-3">
              <span className="`w-5 h-5 text-gray-500">
                <LuInbox />
              </span>
              <span className="mr-20">Inbox</span>
            </div>
            <span>3</span>
          </button>

          <button className="w-full text-left px-4 py-2.5 my-1 rounded-lg flex items-center justify-between transition-colors duration-150 text-gray-700 hover:bg-gray-100">
            <div className="flex items-center gap-3">
              <span className="`w-5 h-5 text-gray-500">
                <LuStar />
              </span>
              <span>Starred</span>
            </div>
          </button>

          <button className="w-full text-left px-4 py-2.5 my-1 rounded-lg flex items-center justify-between transition-colors duration-150 text-gray-700 hover:bg-gray-100">
            <div className="flex items-center gap-3">
              <span className="`w-5 h-5 text-gray-500">
                <LuSend />
              </span>
              <span>Sent</span>
            </div>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
