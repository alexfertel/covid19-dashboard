/* eslint-disable react/button-has-type */
import React from 'react';

const getVariantClasses = variant => {
  const v = variant.toLowerCase();
  if (v === 'outlined') return 'text-blue-800 bg-gray-100 border-2 border-blue-800';
  if (v === 'text') return 'text-blue-800';
  if (v === 'inverted') return 'text-blue-600 bg-blue-200';
  return 'text-gray-100 bg-blue-800';
};

const getHoverClasses = variant => {
  const v = variant.toLowerCase();
  if (v === 'outlined') return 'hover:text-gray-100 hover:bg-blue-600 hover:border-transparent';
  if (v === 'text') return 'hover:bg-blue-100';
  if (v === 'inverted') return 'hover:text-blue-500 hover:bg-blue-100';
  return 'hover:bg-blue-600';
};

const getSizeClasses = size => {
  const s = size.toLowerCase();
  if (s === 'small') return 'px-3 py-2';
  if (s === 'large') return 'px-5 py-4';
  return 'px-4 py-3';
};

const Button = ({
  variant = 'contained',
  size = 'medium',
  children,
  onClick = () => {},
  type = 'button',
  classes = '',
}) => {
  const baseClasses = 'rounded-lg inline-block items-center justify-between font-semibold';
  const variantClasses = getVariantClasses(variant);
  const hoverClasses = getHoverClasses(variant);
  const sizeClasses = getSizeClasses(size);
  const className = classes || [baseClasses, variantClasses, sizeClasses, hoverClasses].join(" ");
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
