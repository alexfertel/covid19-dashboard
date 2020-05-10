import React from 'react';

import Layout from '../components/Layout';
import Button from '../global/Button';

const ComponentsPage = () => {
  const rows = ['contained', 'outlined', 'text', 'inverted'];
  const columns = ['small', 'medium', 'large'];

  return (
    <Layout>
      <div className="w-full h-64 p-20 space-y-3 text-gray-900">
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
    </Layout>
  );
};

export default ComponentsPage;
