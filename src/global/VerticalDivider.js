import React from 'react';

const VerticalDivider = ({ height = 6, color = 'gray-2', className = '' }) => (
  <div className={`flex flex-col h-${height} border-l border-${color} ${className}`} />
);

export default VerticalDivider;