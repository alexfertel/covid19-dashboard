import React from 'react';
import Card from '../Card';
import VerticalDivider from '../../global/VerticalDivider';

const legend = [
  { title: 'Negativos', color: 'bg-blue-3' },
  { title: 'Positivos', color: 'bg-yellow-3' },
];

const TestsRelationSection = () => (
  <Card className="ml-4 bg-gray-1" shadow="shadow-md">
    <div className="px-2 pt-1 pb-2">
      <div className="flex w-full">
        <h2 className="font-medium leading-5 font-quicksand text-gray-4">Relación de Test PCR</h2>
      </div>
      <div className="relative">
        <div className="absolute flex top-" style={{ top: 16 }}>
          <VerticalDivider height="h-9" />
          <div className="ml-3 font-semibold font-quicksand">
            <p className="text-4xl leading-7 tracking-wide text-black">79834</p>
            <p className="mt-1 ml-1 text-xs leading-3 text-red-2">tests realizados</p>
          </div>
        </div>
        {/* Graph should appear here */}
        <div className="flex items-center justify-center w-20 h-56 ml-20">Graph</div>
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
    </div>
  </Card>
);

export default TestsRelationSection;
