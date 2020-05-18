/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { usePopper } from 'react-popper';

import Card from '../Card';
import { ChevronIcon } from '../../global/icons';

const Select = ({ children = [] }) => {
  const [value, setValue] = useState(children[0] || '');

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <div className="relative inline-flex items-center font-medium leading-5 font-quicksand text-blue-2">
      {value}
      <button
        type="button"
        className="px-2 py-1 ml-1 rounded-full focus:outline-none bg-blue-3"
        ref={setReferenceElement}
      >
        <ChevronIcon className="w-2 h-2 transform -rotate-90" />
      </button>

      <div
        className="px-1 pt-2 pb-3 mt-2 text-center rounded-md shadow-md"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {children.map(child => (
          <>{child}</>
        ))}
      </div>
    </div>
  );
};

const MapSection = () => (
  <Card className="">
    <div className="flex px-2 pt-1 pb-2">
      <div className="flex">
        <p className="font-medium leading-5 font-quicksand text-gray-4">Distribución por </p>
        <span className="flex pl-1">
          <Select>
            <p>Municipios</p>
            <p>Provincias</p>
          </Select>
        </span>
      </div>
    </div>
  </Card>
);

export default MapSection;
