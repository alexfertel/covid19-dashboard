/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

import Card from '../Card';

const getAllAccumulatedCases = cases =>
  Object.values(
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
          deceased: newDeceased,
          recovered: newRecovered,
          evacuated: newEvacuated,
        };
      },
      {
        diagnosed: 0,
        activeCases: 0,
        deceased: 0,
        recovered: 0,
        evacuated: 0,
      }
    )
  );

const getLastCases = cases => {
  const latestDay = cases[cases.length - 1].day;
  const { diagnosed, evacuated, deceased, recovered } = latestDay;
  return Object.values({
    latestDiagnosed: diagnosed.length,
    latestActiveCases: diagnosed.length - evacuated - deceased - recovered,
    latestDeceased: deceased,
    latestRecovered: recovered,
    latestEvacuated: evacuated,
  });
};

const getTextColor = (isPositiveText, quantity) => {
  if (isPositiveText) {
    return quantity >= 0 ? 'text-blue-2' : 'text-red-2';
  }
  return quantity > 0 ? 'text-red-2' : 'text-blue-2';
};

const getQuantityString = quantity => `${quantity >= 0 ? '+' : ''}${quantity}`;

const sections = ['Diagnosticados', 'Activos', 'Recuperados', 'Fallecidos', 'Evacuados'];
const isPositive = [false, false, true, false, true];

const DailySection = ({ cases = [] }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (cases && cases.length > 0) {
      const latestTotals = getAllAccumulatedCases(cases);
      const latestCases = getLastCases(cases);
      setInfo(
        sections.map((title, i) => ({
          title,
          quantity: latestTotals[i],
          delta: { color: getTextColor(isPositive[i], latestCases[i]), text: getQuantityString(latestCases[i]) },
        }))
      );
    }
  }, [cases]);

  return (
    <Card className="w-full">
      <div className="flex grid w-full grid-cols-none pl-3 pr-2 mt-1 divide-y xl:divide-y-0 xl:grid-cols-5 xl:divide-x divide-gray-2">
        {info.map(({ title, quantity, delta }, i) => (
          <div
            key={title}
            className={`${i !== 0 ? 'xl:pl-8' : ''} ${
              i !== info.length - 1 ? 'pr-8' : 'pr-4'
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

export default DailySection;
