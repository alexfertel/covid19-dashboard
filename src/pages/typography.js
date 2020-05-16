import React from 'react';

import Typography from '../global/Typography';

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'buttonText',
  'overLineText',
  'captionText',
];

const TypographyPage = () => (
  <div className="p-10">
    <Typography variant="h1">Typography</Typography>
    <div className="pt-10">
      {variants.map(variant => (
        <Typography classes="p-1" key={variant} variant={variant}>
          {`Hello World ${variant} variant text QWZXY`}
        </Typography>
      ))}
    </div>
  </div>
);

export default TypographyPage;
