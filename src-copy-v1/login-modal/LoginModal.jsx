import React from 'react'
import gg from '../../public/image.jpg'
import fb from '../../public/facebook.png'
import google from '../../public/google.png'


export default function LoginModal() {
  return (
    <div className="flex items-center justify-center px-3 min-h-screen bg-orange-100">
        <div className="flex flex-col md:flex-row shadow-2xl rounded-xl bg-white max-w-3xl  my-4 overflow-hidden">
            <div className="p-6 md:p-12 w-full md:w-3/4">
                <h2 className="font-bold capitalize">Log in</h2>
                <p className="w-full mt-2 mb-4 text-sm text-gray-700/50 font-sans-serif">
                  Log in to you account to upload or download pictures videos or music
                </p>
                <input type="text" className="border-2 border-gray-300/50 py-4 px-3 placeholder:text-xs placeholder:text-gray my-2 rounded-md focus:outline-none" placeholder='Enter your email address' />

                <div className="flex justify-between items-center my-2">
                  <span className="text-xs text-gray-500/90">Forgot password?</span>
                  <button className="bg-teal-700 flex items-center justify-between py-3 px-4 text-md text-white rounded-md">Next &rarr;</button>
                </div>
                <div className="border border-gray w-full my-4"></div>
                <p className="text-xs text-gray-500/50 text-center my-4">Or log in with</p>
                <div className="flex flex-row justify-between space-x-4 w-full my-1">
                  <div className="border border-gray rounded-md py-2 px-4 flex items-center space-x-2">
                  <img className='w-5 h-5 md:w-6 md:h-6 ' src={fb} alt="" />
                  <span className='text-xs text-gray-500/70'>Facebook</span>
                  </div>
                  <div className="border border-gray rounded-md py-2 px-4 flex items-center space-x-2">
                  <img className='w-5 md:w-6 md:h-6 h-5 ' src={google} alt="" />
                  <span className='text-xs text-gray-500/70'>Google</span>
                  </div>
                </div>
            </div>
            <div className="w-full h-64 md:h-full md:w-2/4 ">
            <img className='object-fit h-full w-full rounded-y-0 md:rounded-y-2xl' src={gg} alt="" />
            </div>
        </div>
    </div>
  )
}
