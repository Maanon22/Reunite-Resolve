import "./About.css";

export default function About() {
  return (
    <main>
      <h2>Notre équipe</h2>
      <section>
        <ul className="box-team">
          <li>
            <img src="/images/Manon.webp" alt="Manon" />
            <h2>Manon</h2>
          </li>
          <li>
            <img src="/images/Nabil.webp" alt="Nabil" />
            <h2>Nabil</h2>
          </li>
          <li>
            <img src="/images/Govanni.webp" alt="Giovanni" />
            <h2>Giovanni</h2>
          </li>
          <li>
            <img src="/images/Damien.webp" alt="Damien" />
            <h2>Damien</h2>
          </li>
        </ul>
      </section>
      <h2>Notre Projet</h2>
      <section>
        <p>
          Reunite & Resolve est une entreprise fondée sur la bienveillance et
          l'entraide. Le but de ce site est de vous permettre de trouver un
          endroit pour communiquer avec d'autres survivants. Si malheureusement
          un de vos proches a disparu, un onglet est disponible pour ajouter ses
          informations afin de tenter de le retrouver. !
        </p>
      </section>
    </main>
  );
}
