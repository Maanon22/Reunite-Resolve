import { useEffect, useState } from "react";
import Form from "./Form";
import PersonCard from "./PersonCard";
import './Missing.css';


type Deposant = {
  nom: string;
  prenom: string;
  email: string;
};

type Disparition = {
  id: number;
  photo: string;
  nom: string;
  prenom: string;
  ville_origine: string;
  dernier_lieu_connu: string;
  deposant: Deposant;
};

export default function Missing() {
  const [disparitions, setDisparitions] = useState<Disparition[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedPerson, setSelectedPerson] = useState<Disparition | null>(
    null,
  );
  const [showForm, setShowForm] = useState<boolean>(false);

  const [newPerson, setNewPerson] = useState<Disparition>({
    id: 0,
    photo: "",
    nom: "",
    prenom: "",
    ville_origine: "",
    dernier_lieu_connu: "",
    deposant: {
      nom: "",
      prenom: "",
      email: "",
    },
  });

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

  const handleFormSubmit = (newPersonData: Disparition) => {
    setDisparitions((prevDisparitions) => [...prevDisparitions, newPersonData]);
    setShowForm(false);
  };

  const handleOpenForm = () => {
    setShowForm(true);
  };

  if (loading) {
    return <p className="loading-message">Chargement des données...</p>;
  }

  if (error) {
    return <p className="error-message">Erreur : {error}</p>;
  }

  return (
    <section className="missing-section">
      {selectedPerson ? (
        <PersonCard person={selectedPerson} onClose={handleClosePersonCard} />
      ) : (
        
        <div>
          {disparitions.map((person) => (
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
          ))}

          <button type="button" onClick={handleOpenForm}>
            Déclarer une disparition

          </button>
        </div>
      )}

      {showForm && (
        <Form
          newPerson={newPerson}
          setNewPerson={setNewPerson}
          onSubmit={handleFormSubmit}
          onClose={() => setShowForm(false)}
        />
      )}
    </section>
  );
}
