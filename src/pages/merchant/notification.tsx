import Layout from "../../template/layout";

const MerchantNotification = () => {
  const notifications = [
    "Purchase #101 requires approval",
    "Purchase #102 requires approval",
    "Customer John Doe submitted a request",
  ];

  return (
    <Layout>
      <section className="merchant-notification">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <ul className="bg-white rounded-lg shadow divide-y">
          {notifications.map((n, idx) => (
            <li key={idx} className="p-3 hover:bg-gray-50">
              {n}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default MerchantNotification;
