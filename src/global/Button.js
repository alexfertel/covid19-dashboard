/* eslint-disable react/button-has-type */
import React from 'react';
import { createMatcher } from './utils';

const variants = ['outlined', 'text', 'inverted', 'contained'];
const sizes = ['small', 'medium', 'large'];

const variantClasses = [
  'text-purple-500 bg-white border-2 border-purple-500', // outlined
  'text-purple-500', // text
  'text-purple-600 bg-purple-200', // inverted
  'text-gray-100 bg-purple-600', // contained
];

const hoverClasses = [
  'hover:text-gray-100 hover:bg-purple-500 hover:border-transparent', // outline
  'hover:bg-purple-100 hover:text-purple-600', // text
  'hover:bg-purple-100', // inverted
  'hover:bg-purple-400', // contained
];

const sizeClasses = ['px-3 py-2', 'px-4 py-3', 'px-5 py-4'];
const baseClasses =
  'rounded-2xl inline-block items-center justify-between font-semibold focus:outline-none focus:shadow-outline';

const getVariantClasses = createMatcher(variants, variantClasses);
const getHoverClasses = createMatcher(variants, hoverClasses);
const getSizeClasses = createMatcher(sizes, sizeClasses);

const Button = ({
  children,
  variant = 'contained',
  size = 'medium',
  onClick = () => {},
  type = 'button',
  classes = '',
  className = ''
}) => {
  const computedClasses = [
    baseClasses,
    getVariantClasses(variant),
    getSizeClasses(size),
    getHoverClasses(variant),
  ].join(' ');

  const formalClasses = [classes, computedClasses].join(' ');
  const appliedClasses = className || formalClasses;
  return (
    <button className={appliedClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
