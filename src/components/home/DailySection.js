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
  <Card>
    <div className="flex w-full pl-3 pr-2 mt-1 divide-x divide-gray-2">
      {info.map(({ title, number, delta }, i) => (
        <div
          key={title}
          className={`${i !== 0 ? 'pl-8' : ''} ${
            i !== info.length - 1 ? 'pr-8 w-48' : 'pr-4'
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
