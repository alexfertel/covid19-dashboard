import React from 'react';

const VerticalDivider = ({ height = 6, className = '' }) => (
  <div className={`flex flex-col h-${height} border-l border-gray-2 ${className}`} />
);

export default VerticalDivider;