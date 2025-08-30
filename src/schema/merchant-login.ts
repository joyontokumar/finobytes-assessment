import * as Yup from "yup";

export const merchantLoginSchema = Yup.object({
  storeName: Yup.string().required("store name is required"),
  merchantId: Yup.string().required("merchant ID is required"),
  storeEmail: Yup.string()
    .email("Invalid email")
    .required("store email is required"),
  password: Yup.string()
    .required("password is required")
    .min(4, "password must be at least 4 characters")
    .matches(/[a-z]/, "password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "password must contain at least one uppercase letter")
    .matches(/\d/, "password must contain at least one number"),
});
