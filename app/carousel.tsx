// carousel.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import insta485 from '../public/insta485.png';
import neuralNetwork from '../public/neuralNetwork.png';
import aiCfour from '../public/aiCfour.png';
import ask485 from '../public/ask485.png';
import threeD from '../public/threeD.jpeg';
import piazza from '../public/piazza.png';

function PortfolioCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const portfolioItems = [
    insta485,
    neuralNetwork,
    aiCfour,
    ask485,
    threeD,
    piazza,
  ];

  return (
    <Slider {...settings}>
      {portfolioItems.map((item, index) => (
        <div key={index} className='basis-1/3 flex-1'>
          <Image src={item} width={100} height={100} layout="responsive" alt={`portfolio item ${index + 1}`} className='rounded-lg object-cover'/>
        </div>
      ))}
    </Slider>
  );
}

export default PortfolioCarousel;