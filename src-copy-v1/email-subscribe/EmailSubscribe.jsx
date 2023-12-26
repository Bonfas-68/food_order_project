import React from 'react';
import image from './images/image.jpg';

export default function EmailSubscribe() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-500">
      <div className="mx-6 rounded-2xl bg-zinc-900 p-2">
        <div className="flex flex-col rounded-l-xl md:flex-row">
          <img
            className="object-fit h-75 transform rounded-xl transition duration-300 hover:scale-105 hover:rounded-xl md:h-64 md:rounded-l-xl md:rounded-r-none"
            src={image}
            alt=""
          />
          <div className="p-6 md:p-12">
            <h2 className="font-serif text-center text-xl font-medium text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="my-4 max-w-xs text-center text-xs text-white md:text-left">
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter.
            </p>
            <div className="mt-5 flex flex-col space-y-4 md:flex-row md:space-x-3 md:space-y-0">
              <input
                className="border border-zinc-600 bg-zinc-700 p-2 px-4 text-center text-white placeholder:text-center placeholder:text-xs focus:outline-none md:text-left placeholder:md:text-left"
                type="text"
                placeholder="Enter Email address"
              />
              <button className="rounded-md bg-lime-500 px-5 py-3 text-xs text-zinc-600 transition-all duration-300 hover:bg-lime-700 hover:text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
