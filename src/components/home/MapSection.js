import React from 'react';

import { Select, SelectItem } from '../../global/Select';
import Card from '../Card';
import VerticalDivider from '../../global/VerticalDivider';

const legend = [
  { title: 'Eventos de transmisión local activos', color: 'bg-yellow-3' },
  { title: 'Eventos de transmisión local cerrados', color: 'bg-blue-3' },
];

const colors = [
  'gray-4',
  'gray-3',
  'gray-2',
  'red-3',
  'red-2',
  'red-1'
]

const Colors = () => colors.map(color => (
  <div key={color} className={`bg-${color} h-3 w-3 rounded-full border border-white`} />
))

const MapSection = () => (
  <Card className="ml-4">
    <div className="px-2 pt-1 pb-2">
      <div className="flex">
        <p className="font-medium leading-5 font-quicksand text-gray-4">Distribución por </p>
        <span className="flex pl-1">
          <Select>
            <SelectItem value="Municipios" label="Municipios" />
            <SelectItem value="Provincias" label="Provincias" />
          </Select>
        </span>
      </div>
      {/* Map should go here */}
      <div className="w-full h-48 mt-4 border border-opacity-50 rounded-xl border-gray-2" />
      <div className="flex mt-8">
        <div className="flex items-center pr-2">
          {legend.map(({ title, color }, i) => (
            <>
              {i ? <VerticalDivider height={2} className="opacity-75" /> : null}
              <div className={`rounded-full ml-2 h-1 w-1 ${color}`} />
              <p className="pl-1 pr-2 text-xs font-medium leading-5 font-quicksand text-gray-4">{title}</p>
            </>
          ))}
          <VerticalDivider height={2} className="opacity-75" />
          <div className="flex items-center pl-1 text-xs font-medium leading-5 font-quicksand text-gray-4">
            <p className="">0</p>
            <Colors />
            <p className="">135 casos</p>
          </div>

        </div>
      </div>
    </div>
  </Card>
);

export default MapSection;
