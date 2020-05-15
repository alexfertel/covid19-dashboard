import React, { useRef } from 'react';
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import './leafletMap.css';
import { getIndexRangeFromNumber, fullColorScale, CreateRanges } from 'f:/components/utils/helperFunctions';
import municipalities from './data/municipalities';

const LeafletMap = ({ center, zoom, position }) => {
  const mapRef = useRef(null);

  const max = Math.floor(Math.random() * 1000);
  const range = CreateRanges(1, max, 7);

  return (
    typeof window !== 'undefined' && (
      <div className="flex justify-center rounded-lg ">
        <Map ref={mapRef} center={center} zoom={zoom}>
          <TileLayer
            minZoom={6}
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON
            data={municipalities}
            style={() => {
              const index = getIndexRangeFromNumber(Math.floor(Math.random() * max), range);
              const colorIndex = index < 0 ? 0 : index;
              const color = fullColorScale[colorIndex];
              return {
                color,
                weight: 1,
                fillColor: color,
                fillOpacity: 0.4,
              };
            }}
          />
          <Marker position={position}>
            <Popup>Hi</Popup>
          </Marker>
        </Map>
      </div>
    )
  );
};

export default LeafletMap;
