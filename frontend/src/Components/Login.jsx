import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";




const Login = ({ showPopup, setShowPopup }) => {

  return (
    <>
      {!showPopup && (
        <div>
          <div className="h-screen w-scren fixed top-0 left-0 right-0 bg-black/50  z-50 backdrop-blur-sm backdrop-blur-md backdrop-blur-lg">
            <div className='fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rouned-md duration-200 w-[300px]'>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-dark">Login</h1>
                </div>
                <div>
                  <IoCloseOutline className="text-2xl cursor-pointer"  onClick={() => setShowPopup(false)}/>  
                </div>
              </div>
              <div className='mt-4 '>
                <input type="email" placeholder='Enter your email' className='w-full rounded-md border border-gray-300 dark borer-gray-500 px-2 py-1 mb-4' />
                <input type="password" placeholder='Enter your Password' className='w-full rounded-md border border-gray-300 dark borer-gray-500 px-2 py-1 mb-4' />
                <button className='w-full bg-orange-500 text-white rounded-md p-2 hover hover:bg-orange-600' onClick={() => setShowPopup(false)}>Login</button>
              </div>
              <div className='mt-4 flex gap-4'>
                <p className='text-center'>Don't have an account?</p>
                <p>Signup</p>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Login;


  


