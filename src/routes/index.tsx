import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/home"));
const AdminLogin = React.lazy(() => import("../pages/admin/login"));
const MerchantLogin = React.lazy(() => import("../pages/merchant/login"));
const MemberLogin = React.lazy(() => import("../pages/member/login"));
const MemberDashboard = React.lazy(() => import("../pages/member/dashboard"));
const AdminDashboard = React.lazy(() => import("../pages/admin/dashboard"));
const MerchantDashboard = React.lazy(
  () => import("../pages/merchant/dashboard")
);

const MerchantLookupCustomer = React.lazy(
  () => import("../pages/merchant/look-up-customer")
);

const MerchantContributionRate = React.lazy(
  () => import("../pages/merchant/contribution-rate")
);

const MerchantNotification = React.lazy(
  () => import("../pages/merchant/notification")
);

const NotFound = React.lazy(() => import("../pages/not-found"));

const AllRoutes = () => {
  const { role } = useSelector((state: any) => state.tokenInfo);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login/admin" element={<AdminLogin />}></Route>
      <Route path="/login/merchant" element={<MerchantLogin />}></Route>
      <Route path="/login/member" element={<MemberLogin />}></Route>

      {role === "admin" && (
        <>
          <Route path="/dashboard/admin" element={<AdminDashboard />}></Route>
        </>
      )}
      {role === "merchant" && (
        <>
          <Route
            path="/dashboard/merchant"
            element={<MerchantDashboard />}
          ></Route>
          <Route
            path="/dashboard/approve-purchases"
            element={<MerchantDashboard />}
          ></Route>
          <Route
            path="/dashboard/merchant-lookup-customer"
            element={<MerchantLookupCustomer />}
          ></Route>
          <Route
            path="/dashboard/merchant-contribution-rate"
            element={<MerchantContributionRate />}
          ></Route>
          <Route
            path="/dashboard/merchant-notification"
            element={<MerchantNotification />}
          ></Route>
        </>
      )}

      {role === "member" && (
        <>
          <Route path="/dashboard/member" element={<MemberDashboard />}></Route>
        </>
      )}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
