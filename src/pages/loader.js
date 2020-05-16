import React from 'react';

import Typography from '../global/Typography';
import Loader from '../global/Loader';

const LoaderPage = () => (
  <div className="p-10">
    <Typography variant="h1">Loader</Typography>
    <div className="grid justify-center grid-cols-3 gap-4 pt-10">
      <Loader />
    </div>
  </div>
);

export default LoaderPage;
