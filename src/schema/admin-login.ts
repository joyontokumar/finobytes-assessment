import * as Yup from "yup";

export const adminLoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("password is required")
    .min(4, "password must be at least 4 characters")
    .matches(/[a-z]/, "password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "password must contain at least one uppercase letter")
    .matches(/\d/, "password must contain at least one number"),
});
