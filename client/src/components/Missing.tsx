import { useEffect, useState } from "react";

type Disparition = {
  id: number;
  photo: string;
  nom: string;
  prenom: string;
};

export default function Missing() {
  const [disparitions, setDisparitions] = useState<Disparition[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/missing")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur s'est produite lors de la récupération des données.",
          );
        }
        return response.json();
      })
      .then((data) => {
        setDisparitions(data.disparitions);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <section>
      {disparitions.map((person) => (
        <section key={person.id}>
          <img src={person.photo} alt={`${person.prenom} ${person.nom}`} />
          <h2>
            {person.prenom} {person.nom}
          </h2>
        </section>
      ))}
    </section>
  );
}
