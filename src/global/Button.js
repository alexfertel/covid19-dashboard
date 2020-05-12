/* eslint-disable react/button-has-type */
import React from 'react';
import always from 'ramda/src/always';
import cond from 'ramda/src/cond';
import equals from 'ramda/src/equals';
import T from 'ramda/src/T';

const variants = ['outlined', 'text', 'inverted', 'contained']
const sizes = ['small', 'medium', 'large']
const variantClasses = [
  'text-purple-500 bg-gray-100 border-2 border-purple-500',  // outlined
  'text-purple-500',  // text
  'text-purple-600 bg-purple-200',  // inverted
  'text-gray-100 bg-purple-600'  // contained
]

const hoverClasses = [
  'hover:text-gray-100 hover:bg-purple-500 hover:border-transparent',
  'hover:bg-purple-100 hover:text-purple-600',
  'hover:bg-purple-100',
  'hover:bg-purple-400',
]

const sizeClasses = [
  'px-3 py-2',
  'px-4 py-3',
  'px-5 py-4',
]

const createMatches = (ids, matches) =>
  cond(matches.map((match, i) => (ids[i] ? [equals(ids[i]), always(match)] : [T, match[i]])));

const getVariantClasses = createMatches(variants, variantClasses);
const getHoverClasses = createMatches(variants, hoverClasses);
const getSizeClasses = createMatches(sizes, sizeClasses);

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
