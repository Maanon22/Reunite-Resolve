import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface Points {
  id: number;
  name: string;
  position: [number, number];
}

interface Person {
  id: number;
  nom: string;
  prenom: string;
  dernier_lieu_connu: string;
}

const franceCenter: [number, number] = [46.603354, 1.888334]; //determine le point qui est au centre de la carte
const pointsDisparus: Points[] = [
  { id: 1, name: "Lyon", position: [45.764, 4.8357] },
  { id: 2, name: "Rouen", position: [49.4432, 1.0999] },
  { id: 3, name: "Toulon", position: [43.1242, 5.928] },
  { id: 4, name: "Toulouse", position: [43.6045, 1.4442] },
  { id: 5, name: "Rennes", position: [48.1173, -1.6778] },
  { id: 6, name: "Monaco", position: [43.7384, 7.4246] },
  { id: 7, name: "Colmar", position: [48.0798, 7.3585] },
  { id: 8, name: "Annecy", position: [45.8992, 6.1294] },
  { id: 9, name: "Narbonne", position: [43.1843, 3.0031] },
  { id: 10, name: "Montpellier", position: [43.6117, 3.8772] },
  { id: 11, name: "Metz", position: [49.1193, 6.1757] },
  { id: 12, name: "Carpentras", position: [44.0557, 5.0487] },
  { id: 13, name: "Blois", position: [47.5861, 1.3356] },
  { id: 14, name: "Besançon", position: [47.2378, 6.0241] },
  { id: 15, name: "Le Mans", position: [48.0061, 0.1996] },
  { id: 16, name: "Niort", position: [46.3237, -0.4588] },
  { id: 17, name: "Cherbourg", position: [49.6392, -1.6155] },
  { id: 18, name: "Épinal", position: [48.1733, 6.4498] },
  { id: 19, name: "Paris", position: [48.8566, 2.3522] },
];

function Carte() {
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    fetch("../../public/Persons.json")
      .then((response) => response.json())
      .then((data) => {
        console.info;
        setPersons(data);
      })
      .catch((error) => console.error("Erreur lors du fetch :", error));
  }, []);

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
      {pointsDisparus.map((point) => (
        <Marker key={point.id} position={point.position}>
          <Popup>
            <strong>Personnes recherchées à {point.name}</strong>
            <ul>
              {persons
                .filter((person) => person.dernier_lieu_connu === point.name)
                .map((filteredPerson) => (
                  <li key={filteredPerson.id}>
                    {filteredPerson.prenom} {filteredPerson.nom}
                  </li>
                ))}
            </ul>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Carte;
