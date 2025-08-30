import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PurchasesDTO } from "../../dtos/purchases";
import withAuth from "../../HOC/withAuth";
import { fetchPurchases } from "../../store/slices/purchases";
import Layout from "../../template/layout";

const MerchantDashboard = () => {
  const dispatch = useDispatch();
  const { purchases, loading } = useSelector((state: any) => state.purchases);
  useEffect(() => {
    dispatch(fetchPurchases() as any);
  }, [dispatch]);

  // const handleApprove = (id: any) => {
  //   alert(`Purchase ${id} approved!`);
  // };

  return (
    <Layout>
      <section className="merchant-dashboard">
        <h2 className="text-xl font-bold mb-4">Approve Purchases</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3 border-b">ID</th>
                <th className="p-3 border-b">Customer</th>
                <th className="p-3 border-b">Amount</th>
                <th className="p-3 border-b">Status</th>
                <th className="p-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center p-4">
                    Loading...
                  </td>
                </tr>
              ) : purchases?.length > 0 ? (
                purchases.map((purchase: PurchasesDTO) => (
                  <tr key={purchase.id} className="hover:bg-gray-50">
                    <td className="p-3 border-b">{purchase.id}</td>
                    <td className="p-3 border-b">{purchase.customer}</td>
                    <td className="p-3 border-b">{purchase.amount}</td>
                    <td className="p-3 border-b">{purchase.status}</td>
                    <td className="p-3 border-b">Approve</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center p-4">
                    Purchases Not Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};

export default withAuth(MerchantDashboard);
