/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

import Card from '../Card';

const DailySection = ({ cases = [] }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (cases && cases.length > 0) {
      const { diagnosed, activeCases, evacuated, deceased, recovered } = getAllAccumulatedCases(cases);
      const { lastDiagnosed, lastActiveCases, lastEvacuated, lastDeceased, lastRecovered } = getLastCases(cases);
      setInfo([
        {
          title: 'Diagnosticados',
          quantity: diagnosed,
          delta: { color: getTextColor(false, lastDiagnosed), text: getQuantityString(lastDiagnosed) },
        },
        {
          title: 'Recuperados',
          quantity: recovered,
          delta: { color: getTextColor(true, lastRecovered), text: getQuantityString(lastRecovered) },
        },
        {
          title: 'Activos',
          quantity: activeCases,
          delta: { color: getTextColor(false, lastActiveCases), text: getQuantityString(lastActiveCases) },
        },
        {
          title: 'Fallecidos',
          quantity: deceased,
          delta: { color: getTextColor(false, lastDeceased), text: getQuantityString(lastDeceased) },
        },
        {
          title: 'Evacuados',
          quantity: evacuated,
          delta: { color: 'text-gray-3', text: getQuantityString(lastEvacuated) },
        },
      ]);
    }
  }, [cases]);
  
  return (
    <Card>
      <div className="flex w-full pl-3 pr-2 mt-1 divide-x divide-gray-2">
        {info.map(({ title, quantity, delta }, i) => (
          <div
            key={title}
            className={`${i !== 0 ? 'pl-8' : ''} ${
              i !== info.length - 1 ? 'pr-8 w-48' : 'pr-4'
            } font-medium leading-5 font-quicksand`}
          >
            <h2 className="text-gray-4">{title}</h2>
            <p className="mt-2 text-3xl font-semibold tracking-wide text-black">{quantity}</p>
            <p className={`mt-2 text-xs ${delta.color}`}>{delta.text}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

const getAllAccumulatedCases = cases =>
  cases.reduce(
    (accumulator, current) => {
      const { diagnosed, evacuated, deceased, recovered } = current.day;
      const newDiagnosed = accumulator.diagnosed + diagnosed.length;
      const newEvacuated = accumulator.evacuated + evacuated;
      const newDeceased = accumulator.deceased + deceased;
      const newRecovered = accumulator.recovered + recovered;
      const newActiveCases = newDiagnosed - newEvacuated - newDeceased - newRecovered;
      return {
        diagnosed: newDiagnosed,
        activeCases: newActiveCases,
        evacuated: newEvacuated,
        deceased: newDeceased,
        recovered: newRecovered,
      };
    },
    {
      diagnosed: 0,
      activeCases: 0,
      evacuated: 0,
      deceased: 0,
      recovered: 0,
    }
  );

const getLastCases = cases => {
  const lastDay = cases[cases.length - 1].day;
  const { diagnosed, evacuated, deceased, recovered } = lastDay;
  return {
    lastDiagnosed: diagnosed.length,
    lastActiveCases: diagnosed.length - evacuated - deceased - recovered,
    lastEvacuated: evacuated,
    lastDeceased: deceased,
    lastRecovered: recovered,
  };
};

const getTextColor = (isPositiveText, quantity) => {
  if (isPositiveText) {
    return quantity >= 0 ? 'text-blue-2' : 'text-red-2';
  }
  return quantity > 0 ? 'text-red-2' : 'text-blue-2';
};

const getQuantityString = quantity => `${quantity >= 0 ? '+' : ''}${quantity}`;

export default DailySection;
