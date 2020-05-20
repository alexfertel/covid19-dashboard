/* eslint-disable react/button-has-type */
import React from 'react';
import { createMatcher } from './utils';

const variants = ['outlined', 'text', 'inverted', 'contained'];
const sizes = ['smallest', 'small', 'medium', 'large'];

const variantClasses = [
  'text-blue-3 bg-transparent border-2 border-blue-3', // outlined
  'text-blue-3 bg-transparent', // text
  'text-blue-3 bg-blue-2', // inverted
  'text-white bg-blue-3', // contained
];

const hoverClasses = [
  'hover:shadow-lg hover:text-white hover:bg-blue-3 hover:border-transparent', // outline
  'hover:shadow-lg hover:bg-blue-1', // text
  'hover:shadow-lg hover:bg-blue-1', // inverted
  'hover:shadow-lg hover:bg-blue-2', // contained
];

const activeClasses = [
  'active:shadow-xs', // outline
  'active:shadow-xs', // text
  'active:shadow-xs', // inverted
  'active:shadow-xs', // contained
];

const sizeClasses = ['px-1 py-1 text-xs', 'px-3 py-2', 'px-4 py-3', 'px-8 py-4'];
const baseClasses =
  'font-montserrat leading-3 font-semibold shadow-sm rounded-full inline-block items-center justify-between focus:outline-none focus:shadow-outline transition-shadow transform duration-300 ease-out';

const getVariantClasses = createMatcher(variants, variantClasses);
const getHoverClasses = createMatcher(variants, hoverClasses);
const getActiveClasses = createMatcher(variants, activeClasses);
const getSizeClasses = createMatcher(sizes, sizeClasses);

const Button = ({
  children,
  variant = 'contained',
  size = 'medium',
  onClick = () => {},
  type = 'button',
  classes = '',
  className = '',
}) => {
  const computedClasses = [
    baseClasses,
    getVariantClasses(variant),
    getSizeClasses(size),
    getHoverClasses(variant),
    getActiveClasses(variant),
  ].join(' ');

  const formalClasses = [computedClasses, classes].join(' ');
  const appliedClasses = className || formalClasses;
  return (
    <button className={appliedClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
