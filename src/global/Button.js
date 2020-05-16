/* eslint-disable react/button-has-type */
import React from 'react';
import { createMatcher } from './utils';

const variants = ['outlined', 'text', 'inverted', 'contained'];
const sizes = ['small', 'medium', 'large'];

const variantClasses = [
  'text-blue-3 bg-white border-2 border-blue-3', // outlined
  'text-blue-3 bg-white', // text
  'text-blue-3 bg-blue-2', // inverted
  'text-white bg-blue-3', // contained
];

const hoverClasses = [
  'hover:text-white hover:bg-blue-3 hover:border-transparent', // outline
  'hover:bg-blue-1', // text
  'hover:bg-blue-1', // inverted
  'hover:bg-blue-2', // contained
];

const activeClasses = [
  'active:shadow-xs', // outline
  'active:shadow-xs', // text
  'active:shadow-xs', // inverted
  'active:shadow-xs', // contained
];

const sizeClasses = ['px-3 py-2', 'px-4 py-3', 'px-8 py-4'];
const baseClasses =
  'font-montserrat shadow-md font-semibold rounded-full inline-block items-center justify-between focus:outline-none focus:shadow-outline';

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

  const formalClasses = [classes, computedClasses].join(' ');
  const appliedClasses = className || formalClasses;
  return (
    <button className={appliedClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
