import React from 'react';

const Loader = ({ size = 32 }) => (
  <div className="absolute inset-0 flex items-center justify-center text-white">
    <div className={`w-${size} h-${size} ease-linear border-8 border-t-8 border-gray-300 rounded-full loader`} />
  </div>
);

export default Loader;
