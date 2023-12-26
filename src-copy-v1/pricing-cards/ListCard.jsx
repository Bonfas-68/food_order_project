import React from 'react';

export default function ListCard(props) {
  return (
    
      <div className="flex flex-col space-y-2">
        <div className="flex justify-center">
          <span>✔</span>
          <span class="ml-1 text-sm">{props.text}</span>
        </div>
      </div>
    
  );
}
