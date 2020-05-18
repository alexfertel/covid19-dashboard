import React from 'react';

import Card from '../Card';
import { CalendarIcon, ChevronIcon } from '../../global/icons';

const CalendarButton = () => (
  <div className="flex items-center justify-center p-3 bg-white cursor-pointer rounded-xl">
    <CalendarIcon />
  </div>
);

const CalendarSection = () => (
  <Card className="ml-4 bg-blue-3">
    <div className="flex items-center h-full px-2">
      <CalendarButton />
      <div className="flex items-center pl-5 space-x-3">
        <ChevronIcon className="w-5 h-6" />
        <div className="flex items-center leading-5 text-white font-quicksand">
          <p className="text-6xl">15</p>
          <span className="pl-1">
            <p className="mt-1 text-xl">May</p>
            <p className="mt-1 ml-1 text-sm">2020</p>
          </span>
        </div>
        <ChevronIcon className="w-5 h-6 transform rotate-180 rotate" />
      </div>
    </div>
  </Card>
);

export default CalendarSection;
