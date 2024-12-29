import { useFormik } from "formik";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const initialValues = {
  usernameOrEmail: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  const error = {};

  if (!values.usernameOrEmail) {
    error.usernameOrEmail = "Enter username or email.";
  }

  if (!values.password) {
    error.password = "Password is required.";
  }

  return error;
};

const LogInPage = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <div className="bg-black text-black h-[90vh]">
        <div className="flex flex-row justify-center items-center px-20 py-8">
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="flex flex-row items-center">
              <label
                htmlFor="usernameOrEmail"
                className="mr-3 text-2xl text-white"
              >
                <FaRegUser />
              </label>
              <input
                type="text"
                id="usernameOrEmail"
                name="usernameOrEmail"
                placeholder="Enter username"
                onChange={formik.handleChange}
                value={formik.values.usernameOrEmail}
                onBlur={formik.handleBlur}
                className="h-[3rem] w-[15rem] sm:w-[20rem] border text-lg px-5"
              />
            </div>
            {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail ? (
              <p className="text-sm text-red-700 ml-12 mt-2">
                {formik.errors.usernameOrEmail}
              </p>
            ) : null}

            <div className="flex flex-row items-center my-2">
              <label htmlFor="password" className="mr-3 text-2xl text-white">
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
              <p className="text-sm text-red-700 ml-12 mt-2">
                {formik.errors.password}
              </p>
            ) : null}

            <div className="flex justify-center">
              <button
                className="text-white px-3 py-2 w-full mt-2 bg-green-500 text-lg font-semibold hover:bg-green-700"
                type="submit"
              >
                Get Started
              </button>
            </div>

            <NavLink to="/signup">
              <center className="font-bold text-blue-700 mt-3 hover:underline">
                Don't have an account?
              </center>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
