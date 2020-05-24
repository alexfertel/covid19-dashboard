import React, { useContext } from 'react';

import Card from '../Card';
import { CalendarIcon, ChevronIcon } from '../../global/icons';
import CasesContext from '../../global/Provider';
import { getLatestDate } from '../../selectors/daily';

const CalendarButton = () => (
  <div className="flex items-center justify-center p-3 bg-white cursor-pointer rounded-xl">
    <CalendarIcon />
  </div>
);

const CalendarSection = () => {
  const { cases } = useContext(CasesContext);
  const currentDate = getLatestDate(cases);

  return (
    <Card className="ml-4 bg-blue-3">
      {console.log('date', currentDate)}
      <div className="flex items-center h-full px-2">
        <CalendarButton />
        <div className="flex items-center pl-5 space-x-3">
          <ChevronIcon className="w-5 h-6 text-white" />
          <div className="flex items-center leading-5 text-white font-quicksand">
            <p className="text-6xl">{currentDate.getDate()}</p>
            <span className="pl-1">
              {currentDate.toLocaleString('default', { month: 'short' })}
              <p className="mt-1 ml-1 text-sm">{currentDate.getFullYear()}</p>
            </span>
          </div>
          <ChevronIcon className="w-5 h-6 text-white transform rotate-180 rotate" />
        </div>
      </div>
    </Card>
  );
};

export default CalendarSection;
