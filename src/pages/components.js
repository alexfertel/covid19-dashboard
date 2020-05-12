import React from 'react';

import Layout from '../components/Layout';
import Button from '../global/Button';
import LineGraph from '../global/LineGraph';
import Typography from '../global/Typography';

const ComponentsPage = () => {
  return (
    <Layout>
      <div className="overflow-auto p-10 h-full">
        <ButtonSection />
        <GraphSection />
        <TypographySection />
      </div>
    </Layout>
  );
};

const Section = ({ title, children }) => (
  <div className="p-10">
    <Typography variant="h1">{title}</Typography>
    {children}
  </div>
);

const ButtonSection = () => {
  const variants = ['contained', 'outlined', 'text', 'inverted'];
  const sizes = ['small', 'medium', 'large'];
  return (
    <Section title="Buttons">
      <div className="w-full p-5 space-y-3 text-gray-900">
        {variants.map(variant => (
          <div className="space-x-5 font-nunito" key={variant}>
            {sizes.map(size => (
              <Button variant={variant} size={size} key={size}>
                Button text
              </Button>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};

const GraphSection = () => (
  <Section title="Graphs">
    <div className="flex  justify-center">
      <div className="p-2 border-2 border-gray-300">
        <LineGraph xs={[0, 400]} ys={[0, 200]} />
      </div>
    </div>
  </Section>
);

const TypographySection = () => {
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
  return (
    <Section title="Typography">
      <div className="pt-10">
        {variants.map(variant => (
          <Typography classes="p-1" key={variant} variant={variant}>
            {`Hello World ${variant} variant text QWZXY`}
          </Typography>
        ))}
      </div>
    </Section>
  );
};

export default ComponentsPage;
