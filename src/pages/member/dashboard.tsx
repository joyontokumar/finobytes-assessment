import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PointsDTO } from "../../dtos/points";
import withAuth from "../../HOC/withAuth";
import { fetchPoints } from "../../store/slices/point-summary";
import Layout from "../../template/layout";

const MemberDashboard = () => {
  const dispatch = useDispatch();
  const { points, loading } = useSelector((state: any) => state.points);
  useEffect(() => {
    dispatch(fetchPoints() as any);
  }, [dispatch]);

  return (
    <Layout>
      <div className="member-dashboard-page">
        <h1 className="text-2xl font-bold mb-6">Points Summary</h1>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3 border-b">ID</th>
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Total Points</th>
                <th className="p-3 border-b">Used Points</th>
                <th className="p-3 border-b">Remaining Points</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center p-4">
                    Loading...
                  </td>
                </tr>
              ) : points?.length > 0 ? (
                points.map((point: PointsDTO) => (
                  <tr key={point.id} className="hover:bg-gray-50">
                    <td className="p-3 border-b">{point.id}</td>
                    <td className="p-3 border-b">{point.name}</td>
                    <td className="p-3 border-b">{point.totalPoints}</td>
                    <td className="p-3 border-b">{point.usedPoints}</td>
                    <td className="p-3 border-b">{point.remainingPoints}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center p-4">
                    Points Not Found
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

export default withAuth(MemberDashboard);
