import React from 'react';
import { TileLayer, GeoJSON, LayersControl, Marker, Popup } from 'react-leaflet';
import { getIndexRangeFromNumber, fullColorScale, CreateRanges } from '../../global/utils';
import municipalities from './data/municipalities';

const Layers = () => {
  const max = Math.floor(Math.random() * 1000);
  const range = CreateRanges(1, max, 7);
  const { BaseLayer, Overlay } = LayersControl;
  return (
    <LayersControl position="topright">
      <BaseLayer checked name="OpenStreetMap">
        <TileLayer
          minZoom={6}
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </BaseLayer>

      <Overlay checked name="Contagios">
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
      </Overlay>
      <Overlay checked name="Hospitales">
        <Marker position={[21.860263, -79.628906]}>
          <Popup>Hi</Popup>
        </Marker>
      </Overlay>
    </LayersControl>
  );
};

export default Layers;
