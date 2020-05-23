import React from 'react';
import Card from '../Card';
import VerticalDivider from '../../global/VerticalDivider';
import { ChevronIcon } from '../../global/icons';

const legend = [
  { title: 'Casos en el día', color: 'bg-blue-3' },
  { title: 'Casos acumulados', color: 'bg-red-3' },
  { title: 'Casos Activos', color: 'bg-yellow-3' },
];

const DailyCasesEvolutionSection = () => (
  <Card>
    <div className="px-2 pt-1">
      <div className="flex justify-between w-full">
        <h2 className="font-medium leading-5 font-quicksand text-gray-4">Evolución de casos por día</h2>
        <div className="flex items-center justify-center px-2 py-1 text-xs font-semibold leading-3 bg-white border border-opacity-50 rounded-md text-blue-3 border-blue-3 font-quicksand">
          30.03 - 30.04
          <ChevronIcon className="w-1 h-2 ml-2 transform -rotate-90" strokeWidth={4} />
        </div>
      </div>
      {/* Graph should appear here */}
      <div className="flex items-center justify-center h-56 ml-20 w-80">Graph</div>
    </div>
    <div className="flex justify-center">
      {legend.map(({ title, color }, i) => (
        <div key={title} className="flex items-center pr-2">
          {i ? <VerticalDivider height="h-2" className="opacity-75" /> : null}
          <div className={`rounded-full h-1 w-1 ${i ? 'ml-2 ' : ''}${color}`} />
          <p className="pl-1 text-xs font-medium leading-5 font-quicksand text-gray-4">{title}</p>
        </div>
      ))}
    </div>
  </Card>
);

export default DailyCasesEvolutionSection;
