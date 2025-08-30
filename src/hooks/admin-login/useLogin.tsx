import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginDTO } from "../../dtos/login";

import { toast } from "react-toastify";
import { storeTokenInfo } from "../../store/slices/token";

const useAdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const submitForm = async (value: LoginDTO) => {
    const { email, password } = value;
    void email;
    void password;
    setLoading(true);

    setTimeout(() => {
      dispatch(
        storeTokenInfo({
          token:
            Math.random().toString(36).substr(2) +
            Math.random().toString(36).substr(2),
          role: "admin",
          permissions: ["/dashboard/admin"],
        })
      );
      localStorage.setItem(
        "admin-token",
        JSON.stringify({
          token:
            Math.random().toString(36).substr(2) +
            Math.random().toString(36).substr(2),
        })
      );
      navigate("/dashboard/admin");
      setLoading(false);
      toast.success("Login successful!");
    }, 2500);
  };

  return { submitForm, loading };
};

export default useAdminLogin;
