import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

function Carousel() {
  const settings = {
    dots: true, // Affiche les points de navigation sous le carrousel
    infinite: true, // Permet un défilement infini
    speed: 500, // Durée de transition (en ms)
    slidesToShow: 1, // Nombre de slides visibles à la fois
    slidesToScroll: 1, // Nombre de slides à faire défiler en même temps
    autoplay: true, // Active l'autoplay (défilement automatique)
    autoplaySpeed: 4000, // Vitesse de l'autoplay (en ms)
  };
  return (
    <Slider {...settings}>
      <section>
        <a
          href="https://issues.fr/base-autonome-durable-bad-autonomie-survivalisme/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="carousel-image"
            src="/images/article1.png"
            alt="article"
          />
        </a>
      </section>
      <section>
        <a
          href="https://mouton-resilient.com/kit-survie-nucleaire/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="carousel-image"
            src="/images/article3.png"
            alt="article"
          />
        </a>
      </section>
      <section>
        <a
          href="https://mouton-resilient.com/vivre-sans-electricite-strategies-autonomie//"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="carousel-image"
            src="/images/article2.png"
            alt="article"
          />
        </a>
      </section>
    </Slider>
  );
}

export default Carousel;
