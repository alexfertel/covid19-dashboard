import React from 'react';

const VerticalDivider = ({ height = 'h-6', color = 'border-gray-2', className = '' }) => (
  <div className={`flex flex-col ${height} border-l ${color} ${className}`} />
);

export default VerticalDivider;