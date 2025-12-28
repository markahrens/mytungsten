import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { useMap } from 'react-leaflet/hooks'
import "leaflet-arc";

export default function Leaflet(stops) {
  const bounds = L.latLngBounds();
  stops.stops.forEach(s => {
    bounds.extend([s.lat, s.lng]);
  })
  function TripArc() {
    const map = useMap();
    if ( stops.stops.length > 1) {
      console.log(map)
      for (let i = 0; i < stops.stops.length - 1; i++) {
        L.Polyline.Arc([stops.stops[i].lat, stops.stops[i].lng], [stops.stops[i+1].lat, stops.stops[i+1].lng], {color: '#4A4DE7',
        vertices: 200}).addTo(map);
      }
    }
    return null;
  }
  function TripMarkers() {
    const locationCoords = new Array();
    stops.stops.forEach(loc => {
      locationCoords.push({
        'coords':[loc.lat,loc.lng],
        'name':loc.name,
        'abbr':loc.abbr,
      });
    });
    return locationCoords.map((loc, index) => {
      return(
        <Marker key={index} position={loc.coords}>
          <Popup>
            {loc.name}
          </Popup>
        </Marker>
      );
    });
  }

  return (
    <MapContainer
      className="map"
      bounds={bounds}
      zoom={2}
      scrollWheelZoom={false}
    >
      <TileLayer
        url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}'
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        ext = 'png'
      />
      <TripArc />
      <TripMarkers />
    </MapContainer>
  );
}
