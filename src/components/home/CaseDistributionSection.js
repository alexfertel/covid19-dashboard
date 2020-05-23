import React, { useContext } from 'react';
import Card from '../Card';
import VerticalDivider from '../../global/VerticalDivider';
import CasesContext from '../../global/Provider';
import { getAllAccumulatedCases } from '../../selectors/daily';

const legend = [
  { title: 'Evacuados', color: 'bg-black' },
  { title: 'Fallecidos', color: 'bg-red-3' },
  { title: 'Activos', color: 'bg-yellow-3' },
  { title: 'Recuperados', color: 'bg-blue-3' },
];

const CaseDistributionSection = () => {
  const { cases } = useContext(CasesContext);
  const latestTotals = getAllAccumulatedCases(cases);
  return (
    <Card>
      <div className="px-2 pt-1 pb-2">
        <div className="flex w-full">
          <h2 className="font-medium leading-5 font-quicksand text-gray-4">Distribución de casos</h2>
        </div>
        <div className="relative mt-4">
          <div className="absolute flex">
            <VerticalDivider />
            <p className="ml-3 text-4xl font-semibold leading-5 tracking-wide text-black font-quicksand">
              {latestTotals.diagnosed}
            </p>
          </div>
          {/* Graph should appear here */}
          <div className="flex items-center justify-center w-56 h-56 ml-20">Graph</div>
        </div>
        <div className="flex">
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
};

export default CaseDistributionSection;
