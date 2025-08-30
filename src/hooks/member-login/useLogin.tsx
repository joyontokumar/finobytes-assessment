import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MemberLoginDTO } from "../../dtos/member-login";

import { toast } from "react-toastify";
import { storeTokenInfo } from "../../store/slices/token";

const useMemberLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const submitForm = async (value: MemberLoginDTO) => {
    const { username, password } = value;
    void username;
    void password;
    setLoading(true);

    setTimeout(() => {
      dispatch(
        storeTokenInfo({
          token:
            Math.random().toString(36).substr(2) +
            Math.random().toString(36).substr(2),
          role: "member",
          permissions: ["/dashboard/member"],
        })
      );
      localStorage.setItem(
        "member-token",
        JSON.stringify({
          token:
            Math.random().toString(36).substr(2) +
            Math.random().toString(36).substr(2),
        })
      );
      navigate("/dashboard/member");
      setLoading(false);
      toast.success("Login successful!");
    }, 2500);
  };

  return { submitForm, loading };
};

export default useMemberLogin;
