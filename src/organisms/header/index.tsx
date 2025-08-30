import { useState } from "react";
import { useSelector } from "react-redux";
import storage from "redux-persist/es/storage";
import Sidebar from "../sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { role } = useSelector((state: any) => state.tokenInfo);
  const logout = () => {
    if (role === "member") {
      storage.removeItem("persist:root");
      localStorage.removeItem("member-token");
      window.location.href = "/";
    } else if (role === "admin") {
      storage.removeItem("persist:root");
      localStorage.removeItem("admin-token");
      window.location.href = "/";
    } else if (role === "merchant") {
      storage.removeItem("persist:root");
      localStorage.removeItem("merchant-token");
      window.location.href = "/";
    }
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} />

      <header className="fixed top-0 left-0 right-0 lg:left-64 flex items-center justify-between bg-gray-800 text-white px-4 py-3 shadow-md z-50">
        <div className="text-xl font-bold">{role?.toUpperCase()}</div>

        <button
          className="lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
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
          ) : (
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <nav className="hidden lg:flex gap-6">
          <button onClick={logout} className="hover:text-gray-300">
            Logout
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
