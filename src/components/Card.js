import React from 'react';

const Card = ({ children, className = '' }) => <div className={`p-5 bg-white shadow-lg rounded-xl ${className}`}>{children}</div>;

export default Card;
