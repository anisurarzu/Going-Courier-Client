import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

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
    userLogin()
      .then((result) => {
        history.push(redirectUrl.pathname ?? "/");
      })
      .catch((error) => {});
  };

  return (
    <div className="login-container flex flex-col items-center  grid justify-center w-screen lg:mt-4 mt-16  text-gray-700">
      <span className="text-yellow-600 ">{error}</span>
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 xl:py-32 lg:py-32">
        <div>
          <img
            className="object-cover xl:h-64 w-full  sm:h-8"
            src="https://i.ibb.co/sCZqH4x/login-back.png"
            alt=""
          />
        </div>
        <div className="xl:py-8 lg:py-8 sm:py-2">
          <p className="text-2xl font-bold text-gray-800">
            Please Login First!
          </p>
          <button
            className="btn-design text-white rounded-lg p-2 py-2"
            onClick={handleGoogleLogin}
          >
            <i className="fab fa-google pr-2"></i> Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
