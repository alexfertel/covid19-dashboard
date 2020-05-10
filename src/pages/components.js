import React from 'react';

import Layout from '../components/Layout';
import Button from '../global/Button';
import LineGraph from '../global/LineGraph';

const ComponentsPage = () => {
  const rows = ['contained', 'outlined', 'text', 'inverted'];
  const columns = ['small', 'medium', 'large'];

  return (
    <Layout>
      <div className="w-full p-20 space-y-3 text-gray-900">
        {rows.map(row => (
          <div className="space-x-5 font-nunito" key={row}>
            {columns.map(col => (
              <Button variant={row} size={col} key={col}>
                Button text
              </Button>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <LineGraph />
      </div>
    </Layout>
  );
};

export default ComponentsPage;
