import Carousel from "./components/Carousel";
import Carte from "./components/Carte";
import "./App.css";

function App() {
  return (
    <>
      <p className="intro">
        Bienvenue sur Reunite & Resolve, la dernière lueur d’espoir dans un
        monde dévasté. Après le cataclysme, les réseaux sociaux, les
        communications, et les liens humains ont été brisés. Mais grâce à cette
        plateforme, nous avons recréé un moyen de rassembler les fragments d’un
        passé effacé, d’aider à retrouver ceux qui sont disparus, et de
        renforcer les connexions essentielles dans cette époque de chaos.
      </p>
      <p className="intro">
        Que vous soyez à la recherche d’un proche ou que vous vouliez apporter
        des informations cruciales, nous sommes là pour redonner de l’espoir là
        où il semblait n'y en avoir plus. Ensemble, nous faisons en sorte
        qu’aucune personne ne disparaisse à jamais, même dans ce monde en
        ruines. Rejoignez notre réseau, partagez vos informations, et participez
        à ce mouvement vital pour ramener ceux qui comptent à la maison.
      </p>
      <div className="accueil-content">
        <Carousel />
        <Carte />
      </div>
    </>
  );
}

export default App;
