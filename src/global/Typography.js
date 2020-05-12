import React from 'react';
import { createMatcher } from './utils';

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const regular = ['subtitle1', 'subtitle2', 'body1', 'body2', 'buttonText', 'captionText', 'overLineText'];

const headingClasses = ['5xl', '4xl', '3xl', '2xl', 'xl', 'lg'].map(cls => `text-${cls} font-quicksand`);
const regularClasses = [
  'text-lg leading-loose',
  'text-md leading-normal text-gray-800',
  'text-lg leading-tight font-semibold',
  'text-md leading-none font-semibold text-gray-800',
  'text-md leading-normal font-semibold',
  'text-sm leading-tight font-semibold',
  'text-md font-thin leading-loose font-semibold',
].map(cls => `${cls} font-nunito`);

const getHeadingClasses = createMatcher(headings, headingClasses);
const getRegularClasses = createMatcher(regular, regularClasses);

const Typography = ({ children, variant = regular[0], classes = '', className = '' }) => {
  const formalClasses = [classes, getHeadingClasses(variant) || getRegularClasses(variant)].join(' ');
  const appliedClasses = className || formalClasses;
  return <p className={appliedClasses}>{children}</p>;
};

export default Typography;
