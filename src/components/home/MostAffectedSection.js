/* eslint-disable react/no-array-index-key */
import React from 'react';

import Card from '../Card';
import VerticalDivider from '../../global/VerticalDivider';
import Button from '../../global/Button';

const rows = [
  { No: 1, Provincia: 'La Habana', Casos: 892 },
  { No: 2, Provincia: 'Villa Clara', Casos: 211 },
  { No: 3, Provincia: 'Matanzas', Casos: 166 },
  { No: 4, Provincia: 'C. de Ávila', Casos: 93 },
  { No: 5, Provincia: 'Holguín', Casos: 92 },
  { No: 6, Provincia: 'S. Spíritus', Casos: 68 },
  { No: 7, Provincia: 'P. del Río', Casos: 51 },
  { No: 8, Provincia: 'S. de Cuba', Casos: 49 },
  { No: 9, Provincia: 'Mayabeque', Casos: 48 },
  // { No: 10, Provincia: 'Camagüey', Casos: 25 },
];

const Table = () => (
  <div className="mt-3">
    <div className="flex justify-between">
      <p className="text-xs font-medium font-montserrat text-blue-3">No</p>
      <p className="w-16 text-xs font-medium font-montserrat text-blue-3">Provincia</p>
      <p className="text-xs font-medium text-right font-montserrat text-blue-3">Casos</p>
    </div>
    {rows.map(row => (
      <div key={row.No} className="mt-1">
        <div className="w-full border-t border-opacity-50 border-gray-2" />
        <div className="flex justify-between w-full">
          <p className="w-5 text-xs leading-4 text-gray-4 font-quicksand">{row.No}</p>
          <p className="w-20 text-xs leading-4 text-gray-4 font-quicksand">{row.Provincia}</p>
          <p className="text-xs leading-4 text-right text-gray-4 font-quicksand">{row.Casos}</p>
        </div>
      </div>
    ))}
    <Button variant="outlined" size="smallest" classes="w-full mt-3">
      Ver detalles
    </Button>
  </div>
);

const MostAffectedSection = () => (
  <Card className="py-4 ml-4 bg-gray-1" shadow="md">
    <div className="w-full h-full px-3">
      <div className="flex w-full">
        <VerticalDivider height="8" color="red-3" className="my-1" />
        <h2 className="w-32 pl-2 font-medium leading-5 font-quicksand text-gray-4">Provincias más afectadas</h2>
      </div>
      <Table />
    </div>
  </Card>
);

export default MostAffectedSection;
