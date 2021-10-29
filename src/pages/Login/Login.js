import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation, Redirect } from "react-router-dom";

import "./Login.css";
// import AOS from "aos";

import useAuth from "../../hooks/useAuth";
const Login = () => {
  //   useEffect(() => {
  //     AOS.init({
  //       offset: 100,
  //       duration: 1500,
  //     });
  //   }, []);
  const {
    error,
    userLogin,
    googleLogin,
    isLogin,
    toggleLogin,
    handleUserName,
    handleUserPassword,
    handleUserEmail,
    handleRegistration,
  } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const redirectUrl = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        history.push(redirectUrl);
      })
      .catch((error) => {});
  };

  const handleUserLogin = () => {
    console.log("handling user login------");
    userLogin()
      .then((result) => {
        history.push(redirectUrl.pathname ?? "/");
      })
      .catch((error) => {});
  };

  return (
    <div className="login-container flex flex-col items-center  grid justify-center w-screen lg:mt-4 mt-16  text-gray-700">
      <span className="text-yellow-600 ">{error}</span>

      <form
        onSubmit={handleRegistration}
        className="flex flex-col bg-white rounded shadow-lg p-4 mt-12"
      >
        <h3 className="text-green-500 lg:text-xl font-bold">
          Please {isLogin ? "Login" : "Register"}
        </h3>
        {!isLogin && (
          <div>
            <label className=" text-green-500" htmlFor="name">
              User Name
            </label>
            <input
              onBlur={handleUserName}
              className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="text"
              placeholder="your name"
            />
          </div>
        )}
        <label className="text-left text-green-500" htmlFor="email">
          Email
        </label>
        <input
          onBlur={handleUserEmail}
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="email"
          required
          placeholder="your email"
        />
        <label className="text-left text-green-500" htmlFor="password">
          Password
        </label>
        <input
          onBlur={handleUserPassword}
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="password"
          placeholder="your password"
          required
        />

        <button
          type="submit"
          onClick={handleUserLogin}
          className="flex items-center justify-center h-12 px-6 w-64 bg-green-400 mt-8 rounded font-bold text-sm text-blue-100 hover:bg-blue-600"
        >
          {isLogin ? "Login" : "Register"}
        </button>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2  pt-2">
            <div className="form-check ">
              <input
                onChange={toggleLogin}
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
      </form>

      {shouldRedirect ? <Redirect to={redirectUrl.pathname} /> : null}

      <div>-----Or----</div>
      <button
        className="btn-design text-white rounded-lg"
        onClick={handleGoogleLogin}
      >
        <i className="fab fa-google pr-2"></i> Sign In With Google
      </button>
    </div>
  );
};

export default Login;
