import React from 'react';
import styles from './styles.module.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Harbour } from '../../redux/interfaces';

interface Props {
  harbour: Harbour
}

const Map: React.FC<Props> = ({ harbour }) => {
  const { latitude, longitude } = harbour;
  const lat = latitude || 0;
  const lon = longitude || 0;

  return (
    <div id={ 'map' } className={ styles.container }>
      <MapContainer center={[ lat, lon ]} zoom={ 10 } scrollWheelZoom={ false } style={{ height: '100%', borderRadius: '0 0 .15em .15em' }} dragging={ false }>
        <TileLayer 
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={[ lat, lon ]}>
          <Popup>
            { harbour.name }
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
