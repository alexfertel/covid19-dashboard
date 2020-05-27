import React from 'react';
import dynamic from 'next/dynamic'

const LeafletMap = dynamic(
  () => import('./LeafletMap'),
  { ssr: false }
)


const MapContainer = props => <LeafletMap {...props} />;

export default MapContainer;
