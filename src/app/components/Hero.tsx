'use client';
import React from 'react';
import Slider from 'react-slick';
import Slide from './slide';

const Hero = () => {

  var settings ={
    dots: true,
    Infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,

  };
const slideData =[
{
  id: 0,
  img: "/banner-1.jpg",
  title: "Trending Item",
  mainTitle: "men latest fation",
  price:"$20",
},
{
  id: 0,
  img: "/banner-2.jpg",
  title: "Trending Item",
  mainTitle: "men latest fation",
  price:"$20",
},
{
  id: 0,
  img: "/pexels-ferarcosn-190819.jpg",
  title: "Trending Item",
  mainTitle: "men latest fation",
  price:"$20",
},
{
  id: 0,
  img: "/banner-3.jpg",
  title: "Trending Item",
  mainTitle: "women latest fation",
  price:"$25",
},
]
  
  return (
    <div>
      <div className='container pt-4 lg:pt-0'>
        <Slider {...settings}>
          {slideData.map((item) =>(
            <Slide 
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
            
            />
          ))}
        </Slider>
      </div>
      
    </div>
  )
}

export default Hero
