import { useFormik } from "formik";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  const error = {};

  if (!values.username) {
    error.username = "Username field is required.";
  }

  if (!values.email) {
    error.email = "Email field is required.";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
    error.email = "Invallid email format.";
  }

  if (!values.password) {
    error.password = "Password is required.";
  }

  if (!values.confirmPassword) {
    error.confirmPassword = "Renter the password";
  } else if (values.password !== values.confirmPassword) {
    error.confirmPassword = "Enter correct password";
  }

  return error;
};

const SignUpPage = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <div className="dark:bg-black dark:text-black h-[90vh]">
        <div className="flex flex-row justify-center items-center px-20 py-8">
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="flex flex-row items-center">
              <label
                htmlFor="username"
                className="mr-3 text-2xl dark:text-white"
              >
                <FaRegUser />
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
                className="h-[3rem] w-[15rem] sm:w-[20rem] border text-lg px-5"
              />
            </div>
            {formik.touched.username && formik.errors.username ? (
              <p className="text-sm text-red-700 ml-12 mt-2">
                <i>{formik.errors.username}</i>
              </p>
            ) : null}

            <div className="flex flex-row items-center my-2 dark:text-white">
              <label htmlFor="email" className="mr-3 text-2xl">
                <HiOutlineMail />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                onChange={formik.onChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                className="h-[3rem] w-[15rem] sm:w-[20rem] border text-lg px-5"
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <p className="text-sm text-red-700 ml-12">
                <i>{formik.errors.email}</i>
              </p>
            ) : null}

            <div className="flex flex-row items-center my-2">
              <label
                htmlFor="password"
                className="mr-3 text-2xl dark:text-white"
              >
                <RiLockPasswordLine />
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                className="h-[3rem] w-[15rem] sm:w-[20rem] border text-lg px-5"
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="text-sm text-red-700 ml-12">
                <i>{formik.errors.password}</i>
              </p>
            ) : null}

            <div className="flex flex-row items-center my-2">
              <label
                htmlFor="confirmPassword"
                className="mr-3 text-2xl dark:text-white"
              >
                <RiLockPasswordLine />
              </label>
              <input
                type="password"
                id="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
                className="h-[3rem] w-[15rem] sm:w-[20rem] border text-lg px-5"
              />
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="text-sm text-red-700 ml-12">
                <i>{formik.errors.confirmPassword}</i>
              </p>
            ) : null}

            <div className="flex justify-center">
              <button
                className="dark:text-white px-3 py-2 w-full mt-2 dark:bg-green-500 text-lg font-semibold hover:bg-green-700"
                type="submit"
              >
                Register
              </button>
            </div>

            <NavLink to="/login">
              <center className="font-bold text-blue-700 mt-3 hover:underline">
                Already have an account?
              </center>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
