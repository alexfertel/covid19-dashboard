import React from 'react';

import Typography from '../global/Typography';
import Button from '../global/Button';

const variants = ['contained', 'outlined', 'text', 'inverted'];
const sizes = ['small', 'medium', 'large'];

const ButtonPage = () => {
  return (
    <div className="p-10">
      <Typography variant="h1">Buttons</Typography>
      <div className="w-full p-5 space-y-3 text-gray-900">
        {variants.map(variant => (
          <div className="space-x-5 font-montserrat" key={variant}>
            {sizes.map(size => (
              <Button variant={variant} size={size} key={size}>
                Button text
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonPage;