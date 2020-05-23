import React from 'react';
import Card from '../Card';
import VerticalDivider from '../../global/VerticalDivider';

const legend = [
  { title: 'Hombres diagnosticados', color: 'bg-yellow-3' },
  { title: 'Mujeres diagnosticadas', color: 'bg-blue-3' },
  { title: 'Total diagnosticados', color: 'bg-gray-4' },
];

const AgeRangeDistributionSection = () => (
  <Card className="ml-4">
    <div className="px-2 pt-1">
      <div className="flex w-full">
        <h2 className="font-medium leading-5 font-quicksand text-gray-4">Distribución por rangos etarios</h2>
      </div>
      {/* Graph should appear here */}
      <div className="flex items-center justify-center h-56">Graph</div>
    </div>
    <div className="flex justify-center">
      {legend.map(({ title, color }, i) => (
        <div key={title} className="flex items-center pr-2">
          {i ? <VerticalDivider height={2} className="opacity-75" /> : null}
          <div className={`rounded-full h-1 w-1 ${i ? 'ml-2 ' : ''}${color}`} />
          <p className="pl-1 text-xs font-medium leading-5 font-quicksand text-gray-4">{title}</p>
        </div>
      ))}
    </div>
  </Card>
);

export default AgeRangeDistributionSection;
