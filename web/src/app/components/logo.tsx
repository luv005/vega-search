import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L21.39 6.64V17.36L12 22L2.61 17.36V6.64L12 2Z"
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
        <path
          d="M16.5 8L12 18L7.5 8H16.5Z"
          fill="black"
        />
      </svg>
      <span className="text-2xl font-bold text-gray-800">Vega Search</span>
    </div>
  );
}