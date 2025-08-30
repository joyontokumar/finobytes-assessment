import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import storage from "redux-persist/lib/storage";

import { RootState } from "../store";
import { resetTokenInfo } from "../store/slices/token";

const withAuth = (Component: React.ComponentType) => {
  return function AuthWrapper() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const tokenInfo: any = useSelector((state: RootState) => state.tokenInfo);

    const publicRoutes = ["/login/admin", "/login/merchant", "/login/member"];
    const isTokenValid = Boolean(tokenInfo?.token);
    const isPublicRoute = publicRoutes.includes(pathname);

    useEffect(() => {
      if (!isTokenValid && !isPublicRoute) {
        dispatch(resetTokenInfo());
        storage.removeItem("persist:root");
        navigate("/login/admin", { replace: true });
      }

      if (isTokenValid && isPublicRoute) {
        navigate("/", { replace: true });
      }
    }, [isTokenValid, isPublicRoute, dispatch, navigate, pathname]);

    if ((isTokenValid && !isPublicRoute) || (!isTokenValid && isPublicRoute)) {
      return <Component />;
    }

    return null;
  };
};

export default withAuth;
