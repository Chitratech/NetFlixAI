import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <>
      {" "}
      <div className="absolute">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="backgorund of netflix"
        />
      </div>
      <form className="bg-black  p-12 absolute bg-opacity-80 w-4/12  my-36 left-0 mx-auto right-0 text-white">
        <h2 className="font-bold text-3xl text-white py-4"> Sign In</h2>
        <input
          type="text"
          placeholder="Enter Email"
          className="p-4 my-4 w-full text-gray-500 rounded-lg bg-gray-800"
        />
        <input
          type="text"
          placeholder="Enter Email"
          className="p-4 my-4 w-full text-gray-500 rounded-lg bg-gray-800"
        />

        <button className="bg-red-700 p-4 my-4  w-full rounded-lg">Sign In</button>
      </form>
    </>
  );
};

export default Login;
