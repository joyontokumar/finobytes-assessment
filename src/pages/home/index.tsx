import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import storage from "redux-persist/es/storage";

const Home = () => {
  const { token, role } = useSelector((state: any) => state.tokenInfo);

  const logout = () => {
    storage.removeItem("persist:root");
    localStorage.removeItem("member-token");
    localStorage.removeItem("admin-token");
    localStorage.removeItem("merchant-token");
    window.location.href = "/";
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg mb-12">
        Welcome
      </h1>

      {token === null && (
        <nav className="flex flex-col md:flex-row gap-6">
          <Link
            to="/login/admin"
            className="px-6 py-3 text-lg font-semibold rounded-xl shadow-md bg-white text-green-600 hover:bg-green-100 transition"
          >
            Admin Login
          </Link>

          <Link
            to="/login/merchant"
            className="px-6 py-3 text-lg font-semibold rounded-xl shadow-md bg-white text-purple-600 hover:bg-purple-100 transition"
          >
            Merchant Login
          </Link>

          <Link
            to="/login/member"
            className="px-6 py-3 text-lg font-semibold rounded-xl shadow-md bg-white text-blue-600 hover:bg-blue-100 transition"
          >
            Member Login
          </Link>
        </nav>
      )}

      {["admin", "member", "merchant"].includes(role ?? null) && (
        <button
          onClick={logout}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
        >
          Logout {role}
        </button>
      )}
    </div>
  );
};

export default Home;
