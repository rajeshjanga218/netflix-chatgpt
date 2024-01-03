import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'


const Login = () => {
  const [isSignInForm,setIsSignInForm] =useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const fullName = useRef(null)

  const handleButtonClick=()=>{
    // check validation
    const errorMessage = checkValidData(email.current.value,password.current.value)
    setErrorMessage(errorMessage)


  }

  const togleSignInForm =()=>{
    setIsSignInForm(!isSignInForm)

  }
  return (
    <div className="w-full h-full pb-2 md:pb-4 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <Header/>
      <div className='flex justify-center items-center'>
      <form className='bg-black bg-opacity-75 p-4 md:p-16 flex flex-col gap-6 w-full md:w-[540px]' onSubmit={(e)=>e.preventDefault()}>
        <p className='text-xl text-white font-bold'>{isSignInForm ? "Sign In": "Sign Up"}</p>
        {!isSignInForm && <input 
         ref={fullName}
        type='text' id='fullName' placeholder='full name' className='bg-[#333] rounded-lg text-sm text-white block w-full p-2.5 border-1 focus:outline-none focus:border-blue-500 ' />}
        <input 
        ref={email}
        type='text' 
        id='email' 
        placeholder='email or phone number' 
        className='bg-[#333] rounded-lg text-sm text-white block w-full p-2.5 border-1 focus:outline-none focus:border-blue-500 ' />
        <input 
         ref={password}
        type='text' id='password' placeholder='password' className='bg-[#333] rounded-lg text-sm text-white block w-full p-2.5 border-1 focus:outline-none focus:border-blue-500 ' />
        <p className='text-red-500'>{errorMessage}</p>
        <button type='submit' className='p-2 bg-[#e50914] rounded-lg text-white font-bold' onClick={handleButtonClick}>{isSignInForm ? "Sign In": "Sign Up"}</button>
        <div className='flex justify-between'>
          <div className=''>
            <input type='checkbox' id='checkbox'/>
            <label className='checkbox text-white ml-2'>Remember Me</label>
          </div>
          <div className='text-white'>Need help?</div>
          
        </div>
        <div className=''>
            <p className='text-white'>{isSignInForm ? "New to Netflix?": "Already Registered User?"} <span className='font-bold cursor-pointer' onClick={togleSignInForm}>{isSignInForm ? "Sign up now": "Sign In now"}</span></p>
            <p className='text-white'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-500'>Learn More.</span></p>
          </div>
      </form>
      </div>
    </div>
  )
}

export default Login