import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://picsum.photos/id/235/1500/300" alt="Banner 1" />
      </div>
      <div>
        <img src="https://picsum.photos/id/239/1500/300" alt="Banner 2" />
      </div>
      <div>
        <img src="https://picsum.photos/id/301/1500/300" alt="Banner 3" />
      </div>
      <div>
        <img src="https://picsum.photos/id/302/1500/300" alt="Banner 4" />
      </div>
    </Slider>
  );
};

export default BannerSlider;
