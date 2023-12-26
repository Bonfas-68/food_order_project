import React from 'react'
import hp from '/headphone.png'
import heart from '/heart.png'
import weight from '/weight.png'
export default function ProductModal() {
  return (
   <div className="bg-blue-500/50 flex items-center justify-center min-h-screen">
        <div className="max-w-lg shadow-xl rounded-xl bg-white flex flex-row py-12 px-6 space-x-4 items-start">
            <div className="w-[25%]">

        <img src={hp} alt="" className="w-full h-full" />
            </div>
        <div className="w-[75%]">
            <div className="bg-gray-900 rounded-full block w-40 text-center py-1 px-2 text-white text-sm mb-4">Free shipping</div>
            <h3 className="text-lg capitalize text-slate-700/50 font-semibold mb-6">
                Razer Kraken Kitty Edt Gaming Headset Quartz
            </h3>
            <span className="decoration-linethrough text-sm text-gray-500/50 my-2">$700</span>
            <div className="text-3xl my-4 font-bold text-gray-900">$599</div>
            <p className="text-gray-500/70 text-xs">This offer is valid until April 3rd or as long as stock lasts!</p>
            <button className="w-full text-center text-lg bg-blue-500/70 shadow-sm shadow-blue-900 py-3 px-5 text-white my-3 rounded-md border-b-4  border-blue-900">Add to cart</button>
            <div className="flex space-x-2 items-center text-xs my-2">
                <div className="bg-green-300/50 w-4 h-4 rounded-full animation-pulse duration-300"></div>
                <span>50+ pcs in stock</span>
            </div>
            <div className="flex space-x-4 w-full my-4 flex-row">
                <div className="border border-gray-500/50 rounded-xl py-2 px-3 flex items-center flex-row space-x-2 text-sm">
                <img src={weight} alt="" className="w-4 h-4" />
                <span>Add to cart</span>
                </div>
                <div className="border border-gray-500/50 rounded-xl py-2 px-3 flex items-center flex-row space-x-2 text-sm">
                <img src={heart} alt="" className="w-4 h-4" />
                <span>Add to wishlist</span>
                </div>
            </div>
        </div>
        </div>
    </div>    
  )
}
{/* 
        
        
        
        50+ pcs. in stock*/}