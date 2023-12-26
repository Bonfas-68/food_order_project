import React from 'react';
import ListCard from './ListCard';

export default function Card(props) {
  return (
    <div style={{backgroundColor: props.bgColor}} className="rounded-xl  bg-slate-700 text-white">
      {/* Upper container */}
      <div className="mx-3 mt-3 rounded-t-xl bg-slate-900 p-7">
        <div className="text-center uppercase">{props.header}</div>
        <h2 className="font-serif mt-10 text-center text-5xl">
          {props.storage}
        </h2>
        <h3 className="mt-2 text-center">{props.price}</h3>
        <div className="my-2 flex justify-center">
          <a
            href="#"
            style={{backgroundColor: props.bgColor}}
            className="inline-block rounded-lg border border-violet-600 px-10 py-3 text-center duration-300 hover:border-violet-900 hover:bg-violet-900"
          >
            Purchase
          </a>
        </div>
      </div>
      {/* Lower Container */}
      <div className="border-t border-slate-700"></div>
      <div className="mx-3 mb-3 rounded-b-xl bg-slate-900 p-7">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center">
            <span>✔</span>
            <span class="ml-1 text-sm">{props.text}</span>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center">
            <span>✔</span>
            <span class="ml-1 text-sm">Option to add members</span>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center">
            <span>✔</span>
            <span class="ml-1 text-sm">Extra member benefits</span>
          </div>
        </div>
      </div>
    </div>
  );
}
