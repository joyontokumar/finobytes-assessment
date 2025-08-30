import useMerchantLogin from "../../hooks/merchant-login/useLogin";
import LoginForm from "../../organisms/login-form";
import { merchantLoginSchema } from "../../schema/merchant-login";

const MerchantLogin = () => {
  const { submitForm, loading } = useMerchantLogin();

  return (
    <LoginForm
      title="Merchant Login"
      initialValues={{
        storeName: "",
        merchantId: "",
        storeEmail: "",
        password: "",
      }}
      validationSchema={merchantLoginSchema}
      backgroundColor="bg-teal-950"
      fields={[
        {
          name: "storeName",
          label: "Store Name",
          type: "text",
          placeholder: "Enter store name",
        },
        {
          name: "merchantId",
          label: "Merchant ID",
          type: "text",
          placeholder: "Enter merchant ID",
        },
        {
          name: "storeEmail",
          label: "Store Email",
          type: "email",
          placeholder: "Enter store email",
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      ]}
      loading={loading}
      onSubmit={submitForm}
    />
  );
};

export default MerchantLogin;
