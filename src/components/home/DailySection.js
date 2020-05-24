import React, { useState, useEffect, useContext } from 'react';

import Card from '../Card';
import CasesContext from '../../global/Provider';
import { getAllAccumulatedCases, getLatestCases } from '../../selectors/daily';

const getTextColor = (isPositiveText, quantity) => {
  if (isPositiveText) {
    return quantity >= 0 ? 'text-blue-2' : 'text-red-2';
  }
  return quantity > 0 ? 'text-red-2' : 'text-blue-2';
};

const getQuantityString = quantity => `${quantity >= 0 ? '+' : ''}${quantity}`;

const sections = ['Diagnosticados', 'Activos', 'Fallecidos', 'Recuperados', 'Evacuados'];
const isPositive = [false, false, true, false, true];

const DailySection = () => {
  const { cases } = useContext(CasesContext);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (cases.length > 0) {
      const latestTotals = Object.values(getAllAccumulatedCases(cases));
      const latestCases = Object.values(getLatestCases(cases));
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
