import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*\d)(?=.*[\W_])[\w\W].+$/;

export const basicSchema = yup.object().shape({
    userName: yup
        .string()
        .min(3, "Username must be at least 3 characters long")
        .required("Required"),
    email: yup.string().email("Plese enter valid email").required("Required"),
    password: yup
        .string()
        .trim()
        // .matches(passwordRules, {
        //     message: "Please create a stronger password",
        // })
        .min(7, "error_message_password_min")
        .required("Required"),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Required"),
});
