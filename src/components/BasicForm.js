import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

const BasicForm = () => {
    const {
        values,
        touched,
        isSubmitting,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useFormik({
        initialValues: {
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    // console.log(errors);

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="userName">UserName</label>
            <input
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                id="userName"
                type="userName"
                placeholder="Enter your userName"
                className={
                    errors.userName && touched.userName ? "input-error" : ""
                }
            />
            {errors.userName && touched.userName && (
                <p className="error">{errors.userName}</p>
            )}
            <label htmlFor="email">Email</label>
            <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                type="email"
                placeholder="Enter your email"
                className={errors.email && touched.email ? "input-error" : ""}
            />{" "}
            {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
            )}
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                    errors.password && touched.password ? "input-error" : ""
                }
            />
            {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
            )}
            <label htmlFor="confirmPassword">ConfirmPassword</label>
            <input
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                id="confirmPassword"
                type="password"
                placeholder="Enter your confirmPassword"
                className={
                    errors.confirmPassword && touched.confirmPassword
                        ? "input-error"
                        : ""
                }
            />
            {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
            )}
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    );
};
export default BasicForm;
