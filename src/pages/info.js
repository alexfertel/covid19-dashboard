import React, { useContext } from 'react';

import CasesContext from '../global/Provider';

const InfoPage = () => {
  const { cases } = useContext(CasesContext);

  return (
    <div className="w-full h-64 p-20 text-gray-900">
      <h3 className="w-full text-5xl font-quicksand">Info</h3>
      <h5 className="w-full text-3xl font-quicksand">Cases</h5>
      <div className="h-64 pb-10 overflow-auto">
        {cases.map(({ id, day }) => (
          <>
            <p key={id} className="w-full mt-4 text-gray-800 font-montserrat">
              {`id: ${id} day: ${id} date: ${day.date} cases diagnosed : ${day.diagnosed ? day.diagnosed.length : 0}  `}
            </p>

            {day.diagnosed.map(d => (
              <p key={d.id}>
                {` country ${d.country} age ${d.age} gender: ${d.gender} detection Province ${d.detectionProvince} diagnostic Center ${d.diagnosticCenter}`}
              </p>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default InfoPage;
