import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import withAuth from "../../HOC/withAuth";
import { fetchUsers } from "../../store/slices/users";
import Layout from "../../template/layout";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: any) => state.users);

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  return (
    <Layout>
      <div className="admin-dashboard">
        <h1 className="text-2xl font-bold mb-6">User Management</h1>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3 border-b">ID</th>
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Email</th>
                <th className="p-3 border-b">Role</th>
                <th className="p-3 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center p-4">
                    Loading...
                  </td>
                </tr>
              ) : users?.length > 0 ? (
                users.map((user: any) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="p-3 border-b">{user.id}</td>
                    <td className="p-3 border-b">{user.name}</td>
                    <td className="p-3 border-b">{user.email}</td>
                    <td className="p-3 border-b">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${user.role}`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="p-3 border-b">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${user.status}`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center p-4">
                    Users Not Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(AdminDashboard);
