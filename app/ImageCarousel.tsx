// ImageCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index} className='w-full lg:w-1/3 flex-1 aspect-w-1 aspect-h-1'>
          <Image src={src} layout="fill" objectFit="cover" alt={`porfolio item ${index + 1}`} className='rounded-lg' />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
