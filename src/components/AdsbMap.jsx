import { MapContainer, TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import { useEffect } from "react";

// Convert degrees to radians and back
function toRad(deg) {
  return (deg * Math.PI) / 180;
}
function toDeg(rad) {
  return (rad * 180) / Math.PI;
}

// Spherical Linear Interpolation (Slerp) on 3D Cartesian coordinates
function calculateContinuousGreatCircle(start, end, numPoints = 120) {
  const lat1 = start.lat;
  let lon1 = start.lng;
  const lat2 = end.lat;
  let lon2 = end.lng;

  // Find shortest longitude delta along the sphere
  let dLon = lon2 - lon1;
  while (dLon > 180) dLon -= 360;
  while (dLon < -180) dLon += 360;

  // Unwrapped target longitude so the flight travels continuously along the shortest path
  const targetLon = lon1 + dLon;

  const phi1 = toRad(lat1);
  const theta1 = toRad(lon1);
  const v1 = [
    Math.cos(phi1) * Math.cos(theta1),
    Math.cos(phi1) * Math.sin(theta1),
    Math.sin(phi1),
  ];

  const phi2 = toRad(lat2);
  const theta2 = toRad(targetLon);
  const v2 = [
    Math.cos(phi2) * Math.cos(theta2),
    Math.cos(phi2) * Math.sin(theta2),
    Math.sin(phi2),
  ];

  const dot = Math.min(1, Math.max(-1, v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2]));
  const omega = Math.acos(dot);

  if (omega < 1e-6) {
    return [[lat1, lon1]];
  }

  const sinOmega = Math.sin(omega);
  const points = [];

  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const a = Math.sin((1 - t) * omega) / sinOmega;
    const b = Math.sin(t * omega) / sinOmega;

    const x = a * v1[0] + b * v2[0];
    const y = a * v1[1] + b * v2[1];
    const z = a * v1[2] + b * v2[2];

    const lat = toDeg(Math.atan2(z, Math.sqrt(x * x + y * y)));
    const lon = lon1 + t * dLon + (toDeg(Math.atan2(y, x)) - (lon1 + t * dLon));

    // Precise unwrapped longitude based on atan2 unwrapped from previous step
    points.push([lat, toDeg(Math.atan2(y, x))]);
  }

  // Adjust unwrapped points so longitudes are continuous without 360-degree jumps
  const continuousPoints = [[points[0][0], lon1]];
  for (let i = 1; i < points.length; i++) {
    const prevLon = continuousPoints[i - 1][1];
    let currLon = points[i][1];
    while (currLon - prevLon > 180) currLon -= 360;
    while (currLon - prevLon < -180) currLon += 360;
    continuousPoints.push([points[i][0], currLon]);
  }

  return continuousPoints;
}

function RoutesLayer({ routes }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !routes || routes.length === 0) return;

    const layerGroup = L.layerGroup().addTo(map);

    routes.forEach((r) => {
      if (
        r.origin?.lat != null &&
        r.origin?.lng != null &&
        r.destination?.lat != null &&
        r.destination?.lng != null
      ) {
        try {
          const baseRoute = calculateContinuousGreatCircle(
            { lat: r.origin.lat, lng: r.origin.lng },
            { lat: r.destination.lat, lng: r.destination.lng },
            120
          );

          // Render in central world and offset copies (-360, 0, +360) so infinite panning works everywhere seamlessly
          [-360, 0, 360].forEach((offset) => {
            const points = baseRoute.map(([lat, lng]) => [lat, lng + offset]);
            const poly = L.polyline(points, {
              color: "#0284c7",
              weight: 2,
              opacity: 0.5,
            });

            if (r.flight || r.airline) {
              const popupContent = `<strong>${r.flight || ""}${r.flight && r.airline ? " - " : ""}${r.airline || ""}</strong><br/>${r.origin.code || "Origin"} &rarr; ${r.destination.code || "Destination"}`;
              poly.bindPopup(popupContent);
            }

            poly.addTo(layerGroup);
          });
        } catch (e) {
          // ignore invalid route errors
        }
      }
    });

    return () => {
      layerGroup.clearLayers();
      map.removeLayer(layerGroup);
    };
  }, [map, routes]);

  return null;
}

export default function AdsbMap({ routes }) {
  if (!routes || routes.length === 0) return null;

  const validRoutes = routes.filter(
    (r) =>
      r.origin?.lat != null &&
      r.origin?.lng != null &&
      r.destination?.lat != null &&
      r.destination?.lng != null
  );

  if (validRoutes.length === 0) return null;

  return (
    <MapContainer
      className="map adsb-map"
      center={[38, -95]}
      zoom={3}
      scrollWheelZoom={true}
      worldCopyJump={true}
      style={{ width: "100%", height: "100%", minHeight: "440px" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}"
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        ext="png"
      />
      <RoutesLayer routes={validRoutes} />
    </MapContainer>
  );
}
