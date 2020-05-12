import React from 'react';
import { sizes, createClasses, getClasses } from './utils';

const variants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'subtitle1s',
  subtitle2: 'subtitle2',
  body1: 'body1',
  body2: 'body2',
  buttonText: 'buttonText',
  captionText: 'captionText',
  overLineText: 'overLineText',
};

const defaultVariantClass = '';
const typographyVariants = [
  createClasses(variants.h1, 'text-5xl font-quicksand'),
  createClasses(variants.h2, 'text-4xl font-quicksand'),
  createClasses(variants.h3, 'text-3xl font-quicksand'),
  createClasses(variants.h4, 'text-2xl font-quicksand'),
  createClasses(variants.h5, 'text-xl font-quicksand'),
  createClasses(variants.h6, 'text-lg font-quicksand'),
  createClasses(variants.subtitle1, 'text-lg .leading-loose font-nunito'),
  createClasses(variants.subtitle2, 'text-md .leading-normal text-gray-800  font-nunito'),
  createClasses(variants.body1, 'text-lg .leading-tight font-semibold  font-nunito'),
  createClasses(variants.body2, 'text-md  .leading-none	 font-semibold text-gray-800  font-nunito'),
  createClasses(variants.buttonText, 'text-md .leading-normal font-semibold  font-nunito'),
  createClasses(variants.captionText, 'text-sm .leading-tightfont-semibold  font-nunito'),
  createClasses(variants.overLineText, 'text-md font-thin .leading-loosel font-semibold  font-nunito'),
];

const getVariantClasses = variant => getClasses(variant, typographyVariants, defaultVariantClass);

const Typography = props => {
  const { variant = variants.body1, children, classes = '' } = props;
  const className = [getVariantClasses(variant), classes].join(' ');
  return <p className={className}>{children}</p>;
};

export default Typography;
