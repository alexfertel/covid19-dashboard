import React, { useRef } from 'react';
import { Map } from 'react-leaflet-universal';
import './leafletMap.css';
import Layers from './Layers';

const LeafletMap = ({ center, zoom, position }) => {
  const mapRef = useRef(null);

  return (
    typeof window !== 'undefined' && (
      <div className="flex justify-center rounded-lg ">
        <Map ref={mapRef} center={center} zoom={zoom}>
          <Layers />
        </Map>
      </div>
    )
  );
};

export default LeafletMap;
