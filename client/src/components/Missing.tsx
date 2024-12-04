import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";

type Disparition = {
  id: number;
  photo: string;
  nom: string;
  prenom: string;
  ville_origine: string;
  dernier_lieu_connu: string;
  deposant: {
    nom: string;
    prenom: string;
    email: string;
  };
};

export default function Missing() {
  const [disparitions, setDisparitions] = useState<Disparition[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<Disparition | null>(
    null,
  );

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL;

    fetch(`${baseUrl}/api/persons`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur API: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setDisparitions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(`Erreur de récupération: ${err.message}`);
        setLoading(false);
      });
  }, []);

  const handlePersonClick = (person: Disparition) => {
    setSelectedPerson(person);
  };

  const handleClosePersonCard = () => {
    setSelectedPerson(null);
  };

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <section>
      {selectedPerson ? (
        <PersonCard person={selectedPerson} onClose={handleClosePersonCard} />
      ) : (
        disparitions.map((person) => (
          <button
            type="button"
            key={person.id}
            onClick={() => handlePersonClick(person)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handlePersonClick(person);
              }
            }}
          >
            <img src={person.photo} alt={`${person.prenom} ${person.nom}`} />
            <h2>
              {person.prenom} {person.nom}
            </h2>
          </button>
        ))
      )}
    </section>
  );
}
