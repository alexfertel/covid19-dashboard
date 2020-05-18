/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { usePopper } from 'react-popper';

import Card from '../Card';
import { ChevronIcon } from '../../global/icons';

const SelectItem = ({ label }) => (
  <span className="px-3 pb-1 text-xs font-medium leading-5 font-quicksand text-blue-3">{label}</span>
);

const DropdownCard = ({ children, onItemClick, setPopperElement, styles, attributes }) => {
  const newChildren = React.Children.map(children, (child, index) => (
    <>
      <button
        type="button"
        className="w-full px-3 leading-4 rounded-sm focus:outline-none hover:bg-blue-1 hover:bg-opacity-25"
        onClick={() => onItemClick(child)}
        key={index}
      >
        {child}
      </button>
      {index !== children.length - 1 && <div className="mx-1 mt-1 border-t border-opacity-50 border-gray-2" />}
    </>
  ));

  return (
    <div
      className="py-1 mt-2 text-center border rounded-md shadow-lg border-gray-1"
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
    >
      {newChildren}
    </div>
  );
};

const Select = ({ children }) => {
  const [value, setValue] = useState(children[0].props.value || '');

  const [open, setOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, { placement: 'bottom-end' });

  const handleOpenSelect = () => setOpen(wasOpen => !wasOpen);
  const handleItemClick = child => {
    setValue(child.props.value);
    setOpen(false);
  };

  return (
    <div className="relative inline-flex items-center">
      <span className="font-medium leading-5 font-quicksand text-blue-2">{value}</span>
      <button
        type="button"
        className="px-2 py-1 ml-1 rounded-full focus:outline-none bg-blue-3"
        ref={setReferenceElement}
        onClick={handleOpenSelect}
      >
        <ChevronIcon className="w-2 h-2 transform -rotate-90" />
      </button>

      {open && (
        <DropdownCard
          open={open}
          onItemClick={handleItemClick}
          setPopperElement={setPopperElement}
          styles={styles}
          attributes={attributes}
        >
          {children}
        </DropdownCard>
      )}
    </div>
  );
};

const MapSection = () => (
  <Card className="ml-4">
    <div className="flex px-2 pt-1 pb-2">
      <div className="flex">
        <p className="font-medium leading-5 font-quicksand text-gray-4">Distribución por </p>
        <span className="flex pl-1">
          <Select>
            <SelectItem value="Municipios" label="Municipios" />
            <SelectItem value="Provincias" label="Provincias" />
          </Select>
        </span>
      </div>
    </div>
  </Card>
);

export default MapSection;
