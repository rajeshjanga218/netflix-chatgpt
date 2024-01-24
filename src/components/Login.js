import React, { useState, useRef } from 'react';
import Header from './Header';
import checkValidData from '../utils/validate';
import { RegisterUser, loginUser } from '../utils/api';
import auth from '../utils/firebaseConfig';
import { BG_IMAGE } from '../utils/constants';

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = async () => {
    // check validation
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);

    if (message !== null) return;

    if (!isSignInForm) {
      // signup
      const { user, errorMessage } = await RegisterUser(
        auth,
        email.current.value,
        password.current.value,
      );
      if (errorMessage) setErrorMsg(errorMessage);
      // const {res, console} = await updateUser()
    } else {
      // sign in
      const { user, errorMessage } = await loginUser(
        auth,
        email.current.value,
        password.current.value,
      );
      // console.log(errorMessage)
      if (errorMessage) setErrorMsg(errorMessage);
    }
  };

  const togleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative w-full h-full">
      <Header />
      <img
        src={BG_IMAGE}
        className="w-full h-full object-cover"
        alt="bg-avatar"
      />
      <div className="absolute inset-y-[25%] inset-x-[25%] flex justify-center items-center">
        <form
          className="bg-black bg-opacity-75 p-4 md:p-16 flex flex-col gap-6 w-full md:w-[540px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-xl text-white font-bold">
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </p>
          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              id="fullName"
              placeholder="full name"
              className="bg-[#333] rounded-lg text-sm text-white block w-full p-2.5 border-1 focus:outline-none focus:border-blue-500 "
            />
          )}
          <input
            ref={email}
            type="text"
            id="email"
            placeholder="email or phone number"
            className="bg-[#333] rounded-lg text-sm text-white block w-full p-2.5 border-1 focus:outline-none focus:border-blue-500 "
          />
          <input
            ref={password}
            type="text"
            id="password"
            placeholder="password"
            className="bg-[#333] rounded-lg text-sm text-white block w-full p-2.5 border-1 focus:outline-none focus:border-blue-500 "
          />
          <p className="text-red-500">{errorMsg}</p>
          <button
            type="submit"
            className="p-2 bg-[#e50914] rounded-lg text-white font-bold"
            onClick={handleButtonClick}
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <div className="flex justify-between">
            <div className="">
              <input type="checkbox" id="checkboxRememberMe" />
              <label
                htmlFor="checkboxRememberMe"
                className="checkbox text-white ml-2"
              >
                Remember Me
              </label>
            </div>
            <div className="text-white">Need help?</div>
          </div>
          <div className="">
            <p className="text-white">
              {isSignInForm ? 'New to Netflix?' : 'Already Registered User?'}
              <span className="font-bold cursor-pointer">
                <button type="button" onClick={togleSignInForm}>
                  {isSignInForm ? 'Sign up now' : 'Sign In now'}
                </button>
              </span>
            </p>
            <p className="text-white">
              This page is protected by Google reCAPTCHA to ensure you&apos;re
              not a bot. <span className="text-blue-500">Learn More.</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
