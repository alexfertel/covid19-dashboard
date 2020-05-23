import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import Card from '../Card';
import VerticalDivider from '../../global/VerticalDivider';

const legend = [
  { title: 'Negativos', color: 'bg-blue-3' },
  { title: 'Positivos', color: 'bg-yellow-3' },
];

const colors = { positivos: '#eea835', negativos: '#033b75' };
const data = [
  {
    id: 'positivos',
    label: 'Positivos',
    color: 'text-yellow-3',
    value: 2500,
  },
  {
    id: 'negativos',
    label: 'Negativos',
    color: 'text-blue-3',
    value: 78000,
  },
];

const Tooltip = ({ label, color, value }) => (
  <div className="relative rounded-sm">
    <div className="text-xs font-quicksand text-center">
      <p className="text-gray-3">{`Tests ${label}`}</p>
      <p className={`${color}`}>{(value / (78000 + 2500) * 100).toFixed(1)}%</p>
    </div>
    <div className="absolute w-2 h-2 transform rotate-45 bg-white" style={{ left: '49%', bottom: -8 }} />
  </div>
);

const Graph = () => (
  <ResponsivePie
    width={130}
    height={130}
    data={data}
    colors={sector => colors[sector.id]}
    innerRadius={0.75}
    padAngle={5}
    borderWidth={0}
    borderColor={{ from: 'color', modifiers: [['darker', '0']] }}
    cornerRadius={10}
    enableRadialLabels={false}
    enableSlicesLabels={false}
    tooltip={Tooltip}
    theme={{
      tooltip: {
        container: {
          boxShadow: '0 3px 20px 0 rgba(0, 0, 0, 0.29)',
          border: 'solid 0.1px #707070',
          padding: '3.5px 6.5px',
        },
      },
    }}
  />
);

const TestsRelationSection = () => (
  <Card className="flex flex-col justify-between ml-4 bg-gray-1 " shadow="shadow-sm">
    <div className="px-2 pt-1 pb-2">
      <div className="flex w-full">
        <h2 className="font-medium leading-5 font-quicksand text-gray-4">Relación de Test PCR</h2>
      </div>
      <div className="flex mt-4">
        <VerticalDivider height="h-9" />
        <div className="ml-3 font-semibold font-quicksand">
          <p className="text-4xl leading-7 tracking-wide text-black">79834</p>
          <p className="mt-1 ml-1 text-xs leading-3 text-red-2">tests realizados</p>
        </div>
      </div>
      <div className="h-32 mt-6 ml-4">
        <Graph />
      </div>
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

export default TestsRelationSection;
