'use client';

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
// import Flag from "react-world-flags";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

type Props = {
  markers: {
    name: string;
    coordinate: L.LatLngExpression;
    rentPrice: number;
  }[];
  locationValue?: string;
  className?: string;
};

function Map({ className='h-72 rounded-lg', markers, locationValue }: Props) {
  const latLongArray = markers.map(m => m.coordinate as L.LatLngExpression);
  const bounds = markers ? L.latLngBounds([...latLongArray]) : L.latLngBounds([]);

  return (
    <MapContainer
      center={(markers?.[0]?.coordinate as L.LatLngExpression) || [26.9124, 75.7873]}
      zoom={markers.length === 1 ? 16 : 6}
      scrollWheelZoom={false}
      className={className}
      bounds={bounds}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers?.map((marker, index) => (
        <Marker position={(marker?.coordinate as L.LatLngExpression) || [26.9124, 75.7873]} key={index}>
          <Popup>
            <div className="text-lg">
              <p>{marker.name}</p>
              <p className="text-base text-primary">£{marker.rentPrice}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;