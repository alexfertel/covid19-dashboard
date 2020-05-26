import React from 'react';

import Typography from '../global/Typography';
import MapContainer from '../components/Map/MapContainer';

const GisPage = () => (
  <>
    <div className="w-full pb-5 pl-20">
      <Typography variant="h1">GIS</Typography>
    </div>

    <MapContainer
      center={[21.860263, -79.628906]}
      position={[21.860263, -79.628906]}
      zoom={6}
      markerText="Hello, this is a marker"
    />
  </>
);

export default GisPage;
