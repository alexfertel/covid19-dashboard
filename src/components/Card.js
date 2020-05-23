import React from 'react';

const Card = ({ children, className = '', shadow = "lg" }) => <div className={`p-5 bg-white rounded-xl ${className} shadow-${shadow}`}>{children}</div>;

export default Card;
