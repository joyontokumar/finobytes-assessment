import { useState } from "react";
import Layout from "../../template/layout";

const MerchantContributionRate = () => {
  const [contributionRate, setContributionRate] = useState(0);

  return (
    <Layout>
      <section className="merchant-contribution-rate">
        <h2 className="text-xl font-bold mb-4">Set Contribution Rate</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Contribution rate set to ${contributionRate}%`);
          }}
          className="bg-white p-4 rounded-lg shadow space-y-4"
        >
          <label className="block">
            Rate (%):
            <input
              type="number"
              value={contributionRate}
              onChange={(e) => setContributionRate(e.target.value)}
              className="mt-1 w-full p-2 border rounded"
              min={0}
              max={100}
            />
          </label>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Set Rate
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default MerchantContributionRate;
