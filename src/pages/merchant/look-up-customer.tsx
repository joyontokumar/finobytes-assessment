import { useState } from "react";
import Layout from "../../template/layout";

const MerchantDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const customers = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
    "Charlie Davis",
    "David Evans",
    "Ella Green",
    "Frank Hall",
    "Grace Lee",
    "Henry King",
    "Ivy Scott",
    "Jack White",
    "Karen Black",
    "Leo Young",
    "Mia Clark",
    "Noah Hill",
    "Olivia Adams",
    "Paul Baker",
    "Quinn Carter",
    "Rachel Diaz",
  ];

  const filteredCustomers = customers.filter((c) =>
    c.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <section className="merchant-look-up-customer">
        <h2 className="text-xl font-bold mb-4">Lookup Customer</h2>
        <input
          type="text"
          placeholder="Search Customer..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <ul className="bg-white rounded-lg shadow divide-y">
          {filteredCustomers.map((c, idx) => (
            <li key={idx} className="p-3 hover:bg-gray-50">
              {c}
            </li>
          ))}
          {filteredCustomers.length === 0 && (
            <li className="p-3 text-gray-500">No customers found</li>
          )}
        </ul>
      </section>
    </Layout>
  );
};

export default MerchantDashboard;
