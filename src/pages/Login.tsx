/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import Parent from "../components/Parent/Parent";
interface LoginProps {}
const Login: React.FC<LoginProps> = () => {
  const [initData, setInitData] = useState<any>({
    email: "",
    password: "",
  });
  const LoginInSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Enter valid email"),

    password: Yup.string().required("Password is required"),
  });
  const saveData = (values: any, resetForm: any) => {
    localStorage.setItem("Email", values.email);
    localStorage.setItem("Password", values.password);
    window.location.href = "/#/home";
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initData}
      onSubmit={(values: any, { resetForm }) => saveData(values, resetForm)}
      validationSchema={LoginInSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        isSubmitting,
        isValid,
        errors,
        resetForm,
      }) => (
        <Parent className="h-screen w-screen  flex justify-center items-center">
          <Parent className="card bg-white p-12  rounded-md w-96">
            <Parent className="logo_wrap flex flex-col   gap-4">
              <a className="signUpSpan font-semibold" href="/#/register">
                {" "}
                Welcome!
              </a>
              <p>Admin</p>
            </Parent>
            <form className="mt-4">
              <Parent className="flex flex-col gap-3">
                <Parent className="mb-4 flex flex-col  items-start">
                  <label className="font-semibold">
                    <span className="text-red-700 font-semibold">*</span> Email
                    Address
                  </label>
                  <input
                    type="email"
                    className="p-2 w-full"
                    id="exampleFormControlInput1"
                    name="email"
                    placeholder="demo@demo.com"
                    onChange={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 leading-6 font-normal text-left text-xs text-red-600 max-w-xs">
                      {/* {errors.email} */}
                    </p>
                  )}
                </Parent>
                <Parent className="mb-4 flex flex-col  items-start ">
                  <label className="form-label label_modify font-semibold">
                    {" "}
                    <span className="text-red-700 font-semibold">*</span>{" "}
                    Password
                  </label>
                  <input
                    type="password"
                    className="p-2 w-full"
                    name="password"
                    id="exampleFormControlInput1"
                    placeholder="********"
                    onChange={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <p className="mt-1 leading-6 font-normal text-left text-xs text-red-600 max-w-xs">
                      {/* {errors.password} */}
                    </p>
                  )}
                </Parent>
                <Parent className="mb-0 auth_btn">
                  <button
                    type="button"
                    className="bg-yellow-400 font-semibold p-2 rounded-md w-full "
                    onClick={() => handleSubmit()}
                  >
                    Sign In
                  </button>
                </Parent>
              </Parent>
            </form>
          </Parent>
        </Parent>
      )}
    </Formik>
  );
};

export default Login;
