import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [validations, setValidations] = useState({ email: false, password: false })
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' })
  
  const submitHandler = (e) => {
    e.preventDefault()
    let temp = { ...validations }
    if (loginDetails.email === '') {
      temp.email = true
    }else{
      temp.email = false
    }
    if (loginDetails.password === '') {
      temp.password = true
    }else{
      temp.password = false
    }
    setValidations(temp)
    
  }


  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
        <style>
          {`
          body {
            font-family: 'Josefin Sans', sans-serif;
          }
        `}
        </style>
      </Head>
      <div style={{ background: 'url(http://localhost:3000/images/Rectangle%201.png) no-repeat', backgroundSize: 'contain', height: '100vh' }}>
        <div className=" max-w-[577px] mx-auto pt-20 ">
          <div className="bg-white rounded-[6px] ">
            <div className="bg-white  rounded-t-[6px] h-[58px] flex items-center shadow-[0_3px_7px_rgba(0,0,0,0.2)]">
              <img src="/images/Amazon.png" alt="logo" className="w-[99px] mx-auto mt-2" />
            </div>
            <form>
              <div className='max-w-[386px] mx-auto'>
                <p className="text-[#20B716] text-[29px] text-center mt-4 mb-6 font-[400]" style={{ fontFamily: 'Josefin Sans' }}>Login</p>
                <img src="/images/Rectangle 4.png" alt="login" className="mx-auto" />
                <div className="mt-6">
                  <input type="email" placeholder="Email" className="bg-white focus:outline-none w-[100%] h-[35px] border-b-2 pl-4 mb-4 text-[#20B716] placeholder:text-[#20B716]" onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}  />
                  {
                    validations.email && <div className='flex gap-2 items-center mb-4 text-[13px] text-[#EE2D6E]'>
                      <img src='/images/Group 2.svg' alt='error' className='w-4 h-4' />
                      <p className='mt-[2px]'>The email field is required</p>
                    </div>
                  }
                  <input type="password" placeholder="Password" className="bg-white focus:outline-none w-[100%] h-[35px] border-b-2 pl-4 mb-4 text-[#20B716] placeholder:text-[#20B716]" onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} />
                  {
                    validations.password && <div className='flex gap-2 items-center mb-4 text-[13px] text-[#EE2D6E]'>
                      <img src='/images/Group 2.svg' alt='error' className='w-4 h-4' />
                      <p className='mt-[2px]'>The password field is required</p>
                    </div>
                  }
                  <button className="w-[100%] h-[50px] font-normal bg-[#20B716] text-white rounded-[40px]" onClick={submitHandler}>
                    Sign In
                  </button>
                  <div className="flex justify-between mt-4">
                    <p className="text-[14px]">Forgot Password?</p>
                    <p className="text-[#D9185F] text-[14px]" type='submit'>New User? Sign Up</p>
                  </div>
                  <p className="text-[16px] text-center">or</p>
                  <div className="w-[100%] mt-6 flex items-center p-[6px] text-[14px] h-[50px] font-normal bg-[#4285F4] text-white">
                    <img src="/images/Group 9.png" alt="google" className="w-9 h-9" />
                    <p className='w-full text-center'>CONTINUE WITH GOOGLE</p>
                  </div>
                  <div className="w-[100%] mt-4 flex items-center p-[6px] text-[14px] h-[50px] font-normal bg-[#1877F2] text-white">
                    <img src="/images/Rectangle 17.png" alt="google" className="w-9 h-9" />
                    <p className='w-full text-center'>CONTINUE WITH FACEBOOK</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}
