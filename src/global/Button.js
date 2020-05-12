/* eslint-disable react/button-has-type */
import React from 'react';
import { createClasses, getClasses } from './utils';

const variants = {
  outlined: 'outlined',
  text: 'text',
  inverted: 'inverted',
  contained: 'contained',
};

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const variantClasses = [
  createClasses(variants.outlined, 'text-purple-500 bg-gray-100 border-2 border-purple-500'),
  createClasses(variants.text, 'text-purple-500'),
  createClasses(variants.inverted, 'text-purple-600 bg-purple-200'),
];
const defaultVariantClass = 'text-gray-100 bg-purple-600';

const getVariantClasses = variant => getClasses(variant, variantClasses, defaultVariantClass);

const hoverClasses = [
  createClasses(variants.outlined, 'hover:text-gray-100 hover:bg-purple-500 hover:border-transparent'),
  createClasses(variants.text, 'hover:bg-purple-100 hover:text-purple-600'),
  createClasses(variants.inverted, 'hover:bg-purple-100'),
];
const defaultVariantHover = 'hover:bg-purple-400';

const getHoverClasses = variant => getClasses(variant, hoverClasses, defaultVariantHover);

const sizesClasses = [createClasses(sizes.small, 'px-3 py-2'), createClasses(sizes.small, 'px-5 py-4')];

const defaultSizeClasses = 'px-4 py-3';

const getSizeClasses = size => getClasses(size, sizesClasses, defaultSizeClasses);

const Button = props => {
  const { variant = 'contained', size = 'medium', children, onClick = () => {}, type = 'button', classes = '' } = props;
  const baseClasses =
    'rounded-2xl inline-block items-center justify-between font-semibold focus:outline-none focus:shadow-outline';

  const className =
    classes || [baseClasses, getVariantClasses(variant), getSizeClasses(size), getHoverClasses(variant)].join(' ');
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
