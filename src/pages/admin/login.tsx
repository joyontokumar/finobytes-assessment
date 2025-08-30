import withAuth from "../../HOC/withAuth";
import useAdminLogin from "../../hooks/admin-login/useLogin";
import LoginForm from "../../organisms/login-form";
import { adminLoginSchema } from "../../schema/admin-login";

const AdminLogin = () => {
  const { submitForm, loading } = useAdminLogin();

  return (
    <LoginForm
      title="Admin Login"
      initialValues={{ email: "", password: "" }}
      validationSchema={adminLoginSchema}
      backgroundColor="bg-fuchsia-950"
      fields={[
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
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

export default withAuth(AdminLogin);
