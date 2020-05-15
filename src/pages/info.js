import React, { useContext } from 'react';

import Layout from '../components/Layout';
import { storageContext } from '../global/Provider';

const InfoPage = () => {
  const { cases } = useContext(storageContext);

  return (
    <Layout>
      {console.log(cases)}
      <div className="w-full  h-64 p-20 text-gray-900">
        <h3 className="w-full text-5xl font-quicksand">Info</h3>
        <h5 className="w-full text-3xl font-quicksand">Cases</h5>
        {cases.map(({ id, day }) => (
          <p key={id} className="w-full mt-4 text-gray-800 font-montserrat">
            {`id: ${id} day: ${id} date: ${day.date} cases diagnosed : ${day.diagnosed ? day.diagnosed.length : 0}  `}
          </p>
        ))}
      </div>
    </Layout>
  );
};

export default InfoPage;
