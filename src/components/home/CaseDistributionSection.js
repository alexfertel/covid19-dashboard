import React from 'react';

import Card from '../Card';

const legend = [
  { title: 'Evacuados', number: 1862, color: 'bg-black' },
  { title: 'Fallecidos', number: 79, color: 'bg-red-3' },
  { title: 'Activos', number: 321, color: 'bg-yellow-3' },
  { title: 'Recuperados', number: 1460, color: 'bg-blue-3' },
];

const VerticalDivider = ({ height = 6, className = '' }) => (
  <div className={`flex flex-col h-${height} border-l border-gray-2 ${className}`} />
);

const CaseDistributionSection = () => (
  <Card>
    <div className="px-2 pt-1 pb-2">
      <div className="flex w-full">
        <h2 className="font-medium leading-5 font-quicksand text-gray-4">Distribución de casos</h2>
      </div>
      <div className="relative mt-4">
        <div className="absolute flex">
          <VerticalDivider />
          <p className="ml-3 text-4xl font-semibold leading-5 tracking-wide text-black font-quicksand">1862</p>
        </div>
        {/* Graph should appear here */}
        <div className="flex items-center justify-center w-56 h-56 ml-20">Graph</div>
      </div>
      <div className="flex">
        {legend.map(({ title, color }, i) => (
          <div key={title} className="flex items-center pr-2">
            {i ? <VerticalDivider height={2} className="opacity-75" /> : null}
            <div className={`rounded-full ml-2 h-1 w-1 ${color}`} />
            <p className="pl-1 text-xs font-medium leading-5 font-quicksand text-gray-4">{title}</p>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

export default CaseDistributionSection;
