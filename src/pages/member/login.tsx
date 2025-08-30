import useMemberLogin from "../../hooks/member-login/useLogin";
import LoginForm from "../../organisms/login-form";
import { memberLoginSchema } from "../../schema/menber-login";

const MemberLogin = () => {
  const { submitForm, loading } = useMemberLogin();

  return (
    <LoginForm
      title="Member Login"
      initialValues={{ username: "", password: "" }}
      validationSchema={memberLoginSchema}
      backgroundColor="bg-violet-950"
      fields={[
        {
          name: "username",
          label: "Phone/Email",
          type: "text",
          placeholder: "Enter your phone/email",
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

export default MemberLogin;
