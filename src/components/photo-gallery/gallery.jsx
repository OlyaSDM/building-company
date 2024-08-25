
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Gallery = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img src="//images/1.png" alt="Image 1" />
        </div>
        <div>
          <img src="url_to_your_image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="url_to_your_image3.jpg" alt="Image 3" />
        </div>
        {/* Add more images here */}
      </Slider>
    );
  };
  
  export default Gallery;
  
  