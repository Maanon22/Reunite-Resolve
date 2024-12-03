import Carousel from "./components/Carousel";
import Carte from "./components/Carte";

function App() {
  return (
    <>
      <p>
        Bienvenue sur Reunite & Resolve, la dernière lueur d’espoir dans un
        monde dévasté. Dans ce nouvel ordre mondial, où les ruines et le silence
        remplacent la vie d’autrefois, nous avons conçu un espace unique pour
        vous aider à retrouver ceux que vous avez perdus. Après le cataclysme,
        les réseaux sociaux, les communications, et les liens humains ont été
        brisés. Mais grâce à cette plateforme, nous avons recréé un moyen de
        rassembler les fragments d’un passé effacé, d’aider à retrouver ceux qui
        sont disparus, et de renforcer les connexions essentielles dans cette
        époque de chaos. Que vous soyez à la recherche d’un proche ou que vous
        vouliez apporter des informations cruciales, nous sommes là pour
        redonner de l’espoir là où il semblait n'y en avoir plus. Ensemble, nous
        faisons en sorte qu’aucune personne ne disparaisse à jamais, même dans
        ce monde en ruines. Rejoignez notre réseau, partagez vos informations,
        et participez à ce mouvement vital pour ramener ceux qui comptent à la
        maison.
      </p>
      <Carousel />
      <Carte />
    </>
  );
}

export default App;
