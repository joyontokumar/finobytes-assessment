import * as Yup from "yup";

const phoneRegex = /^(\+?\d{1,4}[\s-]?)?\d{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const memberLoginSchema = Yup.object({
  username: Yup.string()
    .required("username is required")
    .test(
      "is-phone-or-email",
      "username must be a valid phone number or email",
      (value) => {
        if (!value) return false;
        return phoneRegex.test(value) || emailRegex.test(value);
      }
    ),
  password: Yup.string()
    .required("password is required")
    .min(4, "password must be at least 4 characters")
    .matches(/[a-z]/, "password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "password must contain at least one uppercase letter")
    .matches(/\d/, "password must contain at least one number"),
});
