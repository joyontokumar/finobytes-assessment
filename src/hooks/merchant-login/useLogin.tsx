import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { MerchantLoginDTO } from "../../dtos/merchant-login";
import { storeTokenInfo } from "../../store/slices/token";

const useMerchantLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const submitForm = async (value: MerchantLoginDTO) => {
    const { storeName, merchantId, storeEmail, password } = value;
    void storeName;
    void merchantId;
    void storeEmail;
    void password;
    setLoading(true);

    setTimeout(() => {
      dispatch(
        storeTokenInfo({
          token:
            Math.random().toString(36).substr(2) +
            Math.random().toString(36).substr(2),
          role: "merchant",
          permissions: ["/dashboard/merchant"],
        })
      );
      localStorage.setItem(
        "merchant-token",
        JSON.stringify({
          token:
            Math.random().toString(36).substr(2) +
            Math.random().toString(36).substr(2),
        })
      );
      navigate("/dashboard/merchant");
      setLoading(false);
      toast.success("Login successful!");
    }, 2500);
  };

  return { submitForm, loading };
};

export default useMerchantLogin;
