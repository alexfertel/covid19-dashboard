import React from 'react';

const Card = ({ children, className = '', shadow = "shadow-md" }) => <div className={`p-5 bg-white rounded-xl ${className} ${shadow}`}>{children}</div>;

export default Card;
