/* eslint-disable react/button-has-type */
import React from 'react';
import { variants, sizes, createClasses, getClasses } from './utils';

const variantClasses = [
  createClasses(variants.outlined, 'text-blue-800 bg-gray-100 border-2 border-blue-800'),
  createClasses(variants.text, 'text-blue-800'),
  createClasses(variants.inverted, 'text-blue-600 bg-blue-200'),
];
const defaultVariantClass = 'text-gray-100 bg-blue-800';

const getVariantClasses = variant => getClasses(variant, variantClasses, defaultVariantClass);

const hoverClasses = [
  createClasses(variants.outlined, 'hover:text-gray-100 hover:bg-blue-600 hover:border-transparent'),
  createClasses(variants.text, 'hover:bg-blue-100'),
  createClasses(variants.inverted, 'hover:text-blue-500 hover:bg-blue-100'),
];
const defaultVariantHover = 'hover:bg-blue-600';

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
