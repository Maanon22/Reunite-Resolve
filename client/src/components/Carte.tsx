import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function carte() {
  const franceCenter: [number, number] = [46.603354, 1.888334]; //determine le point qui est au centre de la carte
  //Faire une const avec tous les points à mettre en avant et mapper dessus dans la fonction pour tous les afficher sur la carte

  return (
    <MapContainer
      center={franceCenter}
      zoom={6}
      style={{ height: "80vh", width: "65%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={franceCenter}>
        <Popup>
          A définir <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default carte;
