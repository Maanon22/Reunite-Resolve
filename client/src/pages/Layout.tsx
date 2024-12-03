import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <header>
        <section>
          <button type="button">
            <a href="/">
              <img src="../../public/images/Logo.webp" alt="Logo" />
            </a>
          </button>
        </section>

        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Personnes disparues</Link>
            </li>
            <li>
              <Link to="/dashboard">À propos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
        <p>© by Reunite & Resolve</p>
        <a href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/rediger-des-conditions-generales-dutilisation">
          CGU & Conditions
        </a>
      </footer>
    </>
  );
}

export default Layout;
