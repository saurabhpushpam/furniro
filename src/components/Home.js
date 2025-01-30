import React from "react";
import Slider from "react-slick";
import './Home.css';
import home from '../images/House_Logo.png'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {


  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black' }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black' }}
        onClick={onClick}
      />
    );
  };



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
    // Arrows: true, // Enable arrows
    // nextArrow: <div className="slick-next slick-arrow" />,
    // prevArrow: <div className="slick-prev slick-arrow" />
    // showArrows: true
    // nextArrow: true
  };



  return (
    <Slider {...settings}>
      <div style={{ width: '80vw', height: '50vh', backgroundColor: 'yellow', border: "10px solid red" }}>
        <img src={home}></img>
      </div>
      <div className="divimg" style={{ width: '100%', height: '50%', backgroundColor: 'red' }}>
        <h3>2</h3>
      </div>
      <div className="divimg" style={{ width: '100%', height: '50%', backgroundColor: 'green' }}>
        <h3>3</h3>
      </div>
      <div className="divimg" style={{ width: '100%', height: '50%', backgroundColor: 'blue' }}>
        <h3>4</h3>
      </div>
      <div className="divimg" style={{ width: '100%', height: '50%', backgroundColor: 'pink' }}>
        <h3>5</h3>
      </div>
      <div className="divimg" style={{ width: '100%', height: '50%', backgroundColor: 'orange' }}>
        <h3>6</h3>
      </div>
    </Slider>
  );
}