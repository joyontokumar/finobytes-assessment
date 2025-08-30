import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen }: any) => {
  const { role } = useSelector((state: any) => state.tokenInfo);
  return (
    <aside
      className={`bg-gray-900 text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 transition-transform duration-200 ease-in-out z-40`}
    >
      <nav className="space-y-4">
        {role === "admin" && (
          <>
            <Link
              to="/dashboard/admin"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Dashboard
            </Link>
            <Link
              to="/dashboard/admin"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Users
            </Link>
          </>
        )}

        {role === "member" && (
          <>
            <Link
              to="/dashboard/member"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Dashboard
            </Link>
            <Link
              to="/dashboard/member"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Points Summary
            </Link>
          </>
        )}

        {role === "merchant" && (
          <>
            <Link
              to="/dashboard/approve-purchases"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Approve Purchases
            </Link>
            <Link
              to="/dashboard/merchant-lookup-customer"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Merchant Lookup Customer
            </Link>
            <Link
              to="/dashboard/merchant-contribution-rate"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Contribution Rate
            </Link>

            <Link
              to="/dashboard/merchant-notification"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Notification
            </Link>
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
