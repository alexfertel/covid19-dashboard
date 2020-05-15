import React from 'react';

const Loader = ({ size = 64 }) => (
  <div className="justify-center">
    <div className={`w-${size} h-${size} ease-linear border-8 border-t-8 border-gray-200 rounded-full  loader`} />
  </div>
);

export default Loader;
