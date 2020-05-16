import React from 'react';

import Typography from '../global/Typography';
import LineGraph from '../global/LineGraph';

const GraphPage = () => (
  <div className="p-10">
    <Typography variant="h1">Graphs</Typography>
    <div className="flex justify-center">
      <div className="p-2 border-2 border-gray-300">
        <LineGraph xs={[0, 400]} ys={[0, 200]} />
      </div>
    </div>
  </div>
);

export default GraphPage;
