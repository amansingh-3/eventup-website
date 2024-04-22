import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../BrandSection/BrandSection.css";
import blogo1 from "../../assets/content-1.svg";
import blogo2 from "../../assets/content.svg";
import blogo3 from "../../assets/content2.svg";
import blogo4 from "../../assets/content3.svg";
import blogo5 from "../../assets/content4.svg";
import blogo6 from "../../assets/content5.svg";
import blogo7 from "../../assets/content6.svg";
import blogo8 from "../../assets/content7.svg";

const logoData = [
  {
    name: "logo 1",
    img: blogo1,
  },
  {
    name: "logo 2",
    img: blogo2,
  },
  {
    name: "logo 3",
    img: blogo3,
  },
  {
    name: "logo 4",
    img: blogo4,
  },
  {
    name: "logo 5",
    img: blogo5,
  },
  {
    name: "logo 6",
    img: blogo6,
  },
  {
    name: "logo 7",
    img: blogo7,
  },
  {
    name: "logo 8",
    img: blogo8,
  },
];

const BrandSection = () => {
  let settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    speed: 8000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className="brand-section">
        <div className="container">
          <div className="brand-row-wrapper">
            <Slider {...settings}>
              {logoData.map((d, index) => (
                <a className="inner_img" href="#" key={index}>
                  <img src={d.img} alt={d.name}></img>
                </a>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandSection;
