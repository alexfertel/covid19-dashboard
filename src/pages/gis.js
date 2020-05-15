import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Typography from '../global/Typography';
import MapContainer from '../components/Map/MapContainer';

const GisPage = () => (
  <Layout>
    <SEO title="Gis" />
    <div className="w-full p-20 text-gray-900">
      <Typography variant="h1">GIS</Typography>
    </div>
    <MapContainer
      center={[21.860263, -79.628906]}
      position={[21.860263, -79.628906]}
      zoom={6}
      markerText="Hello, this is a marker"
    />
  </Layout>
);

export default GisPage;
