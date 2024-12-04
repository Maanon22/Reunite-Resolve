type PersonCardProps = {
  person: {
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
  onClose: () => void;
};

export default function PersonCard({ person, onClose }: PersonCardProps) {
  return (
    <div>
      <button type="button" onClick={onClose}>
        X
      </button>
      <img src={person.photo} alt={`${person.prenom} ${person.nom}`} />
      <h2>
        {person.prenom} {person.nom}
      </h2>
      <p>Ville d'origine : {person.ville_origine}</p>
      <p>Dernier lieu connu : {person.dernier_lieu_connu}</p>
      <h3>Déposant :</h3>
      <p>
        {person.deposant.prenom} {person.deposant.nom}
      </p>
      <p>Email : {person.deposant.email}</p>
    </div>
  );
}
