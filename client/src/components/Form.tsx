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

type FormProps = {
  newPerson: Disparition;
  setNewPerson: React.Dispatch<React.SetStateAction<Disparition>>;
  onSubmit: (newPersonData: Disparition) => void;
  onClose: () => void;
};

export default function Form({
  newPerson,
  setNewPerson,
  onSubmit,
  onClose,
}: FormProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("deposant")) {
      const deposantKey = name.split(".")[1];
      setNewPerson((prevPerson) => ({
        ...prevPerson,
        deposant: {
          ...prevPerson.deposant,
          [deposantKey]: value,
        },
      }));
    } else {
      setNewPerson((prevPerson) => ({
        ...prevPerson,
        [name]: value,
      }));
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setNewPerson((prevPerson) => ({
        ...prevPerson,
        photo: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newPerson);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Informations de la personne disparue</h3>
      <input
        type="text"
        name="prenom"
        value={newPerson.prenom}
        onChange={handleInputChange}
        placeholder="Prénom"
        required
      />
      <input
        type="text"
        name="nom"
        value={newPerson.nom}
        onChange={handleInputChange}
        placeholder="Nom"
        required
      />
      <input
        type="text"
        name="ville_origine"
        value={newPerson.ville_origine}
        onChange={handleInputChange}
        placeholder="Ville d'origine"
        required
      />
      <input
        type="text"
        name="dernier_lieu_connu"
        value={newPerson.dernier_lieu_connu}
        onChange={handleInputChange}
        placeholder="Dernier lieu connu"
        required
      />

      <input
        type="file"
        name="photo"
        accept="image/*"
        onChange={handlePhotoChange}
      />
      {newPerson.photo && (
        <img src={newPerson.photo} alt="Aperçu" width="100" />
      )}

      <h3>Informations du requérant</h3>
      <input
        type="text"
        name="deposant.prenom"
        value={newPerson.deposant.prenom}
        onChange={handleInputChange}
        placeholder="Prénom du requérant"
        required
      />
      <input
        type="text"
        name="deposant.nom"
        value={newPerson.deposant.nom}
        onChange={handleInputChange}
        placeholder="Nom du requérant"
        required
      />
      <input
        type="email"
        name="deposant.email"
        value={newPerson.deposant.email}
        onChange={handleInputChange}
        placeholder="Email du requérant"
        required
      />

      <button type="submit">Ajouter</button>
      <button type="button" onClick={onClose}>
        Annuler
      </button>
    </form>
  );
}
