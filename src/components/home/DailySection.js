import React from 'react';

import Card from '../Card';

const info = [
  { title: 'Diagnosticados', number: 1862, delta: { color: 'text-red-2', text: '+ 22' } },
  { title: 'Activos', number: 321, delta: { color: 'text-blue-2', text: '- 13' } },
  { title: 'Evacuados', number: 2, delta: { color: 'text-gray-3', text: '+ 0' } },
  { title: 'Fallecidos', number: 79, delta: { color: 'text-blue-2', text: '+ 0' } },
  { title: 'Recuperados', number: 1460, delta: { color: 'text-blue-2', text: '+ 35' } },
];

const DailySection = () => (
  <Card className="w-full">
    <div className="flex grid w-full grid-cols-none pl-3 pr-2 mt-1 divide-y xl:divide-y-0 xl:grid-cols-5 xl:divide-x divide-gray-2">
      {info.map(({ title, number, delta }, i) => (
        <div
          key={title}
          className={`${i !== 0 ? 'xl:pl-8' : ''} ${
            i !== info.length - 1 ? 'pr-8' : 'pr-4'
          } font-medium leading-5 font-quicksand`}
        >
          <h2 className="text-gray-4">{title}</h2>
          <p className="mt-2 text-3xl font-semibold tracking-wide text-black">{number}</p>
          <p className={`mt-2 text-xs ${delta.color}`}>{delta.text}</p>
        </div>
      ))}
    </div>
  </Card>
);

export default DailySection;
