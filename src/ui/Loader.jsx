import React from 'react';

export default function Loader() {
  return (
    <div className="justify-center inset-0 items-center backdrop-blur-sm absolute flex bg-slate-200/20">
      <div className="loader"></div>
    </div>
  );
}
