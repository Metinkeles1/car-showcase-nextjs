import * as Yup from "yup";

export const loginSchema = Yup.object({
  userName: Yup.string()
    .required("User Name is required")
    .min(3, "User Name must be at least 3 characters"),
  password: Yup.string().required("password is required"),
});
