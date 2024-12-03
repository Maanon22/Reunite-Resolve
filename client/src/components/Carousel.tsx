import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <section>article 1</section>
      <section>article 2</section>
      <section>article 3</section>
    </Slider>
  );
}

export default Carousel;
