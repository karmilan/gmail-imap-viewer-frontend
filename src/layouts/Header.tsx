import axios from "axios";
import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdLogout, MdMail, MdOutlineSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  onMenuClick: () => void;
};

type User = {
  name: string;
  email: string;
  picture: string;
};

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const picture = localStorage.getItem("picture") || "";

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // fetch user
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "http://localhost:5000/auth/user"
        );
        setUsers(response.data);
        console.log("users", response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <header className="bg-white border-b border-gray-200 shadow-sm z-10">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-full hover:bg-gray-100 md:hidden"
              aria-label="Toggle menu"
            >
              <LuMenu className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex items-center gap-2">
              <MdMail className="w-7 h-7 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-800 hidden sm:block">
                Gmail Viewer
              </h1>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-4 hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdOutlineSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search in emails"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100 md:hidden">
              <MdOutlineSearch className="w-5 h-5 text-gray-600" />
            </button>

            <div className="relative">
              <button
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm cursor-pointer"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <img
                  src={picture}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">
                      user@example.com
                    </p>
                  </div>
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    <MdLogout className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
