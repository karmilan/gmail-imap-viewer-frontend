import { useState } from "react";
import AppRoutes from "../routes/AppRoutes";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="h-screen flex flex-col bg-gray-50">
        <Header onMenuClick={toggleSidebar} />
        <div className="flex flex-1 overflow-hidden">
          {/* {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )} */}

          <Sidebar sidebarOpen={sidebarOpen} />
          <AppRoutes />
        </div>
      </div>
    </>
  );
};

export default Layout;
