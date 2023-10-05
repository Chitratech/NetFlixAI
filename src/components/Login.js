import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSigninForm);
  };
  return (
    <>
      <div className="absolute">
        <Header />

        {/* Background Image */}
        <img
          className=" w-full h-full "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background of Netflix"
        />

        {/* Black Overlay with Opacity*/}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <form className="bg-black  px-14 absolute bg-opacity-80 w-4/12  my-36 left-0 mx-auto right-0 text-white">
        <h2 className="font-bold text-3xl text-white py-4">
          {" "}
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSigninForm ? (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-4 my-4 w-full text-gray-500 rounded-lg bg-gray-800"
          />
        ) : (
          ""
        )}
        <input
          type="email"
          placeholder="Enter Email"
          className="p-4 my-4 w-full text-gray-500 rounded-lg bg-gray-800"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 my-4 w-full text-gray-500 rounded-lg bg-gray-800"
        />
        {!isSigninForm ? (
          <input
            type="password"
            placeholder="Re-Enter Password"
            className="p-4 my-4 w-full text-gray-500 rounded-lg bg-gray-800"
          />
        ) : (
          ""
        )}
        <button className="bg-red-700 p-4 my-4  w-full rounded-lg">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          {" "}
          {isSigninForm
            ? "New to Netflix Sign Up Now "
            : " Alredy Registered Sign In Now"}
        </p>
      </form>
    </>
  );
};

export default Login;
