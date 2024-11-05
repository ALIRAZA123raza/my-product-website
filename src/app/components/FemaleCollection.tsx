
import React from 'react'
import ProductCard from './ProductCard';


const productsData =[
    {
        img:'/New folder/01acc89916e751799345fb85a987bd65.jpg_960x960q80.jpg_.webp',
        title:"women hand watch with hand breslete",
        desc:"pure steel chain watch",
        rating:4,
        price:"25$"
    },
    {
        img:'/New folder/5e0a9cbb458d48a852ca2ab6ab3f65e7.jpg_720x720q80.jpg',
        title:"women hand watch",
        desc:"pure steel watch",
        rating:4,
        price:"20$"
    },
    {
        img:'/New folder/20F0C544-18C0A7E4CDC-1637-5547-817-8203000002.jpg',
        title:"women hand watch",
        desc:"pure lader watch",
        rating:4,
        price:"22$"
    },
    {
        img:'/New folder/images.jpeg',
        title:"women hand watch",
        desc:"pure lader watch",
        rating:4,
        price:"22$"
    },
    {
      img:'/New folder/Most-Popular-Ladies-Watches-Rolex-Datejust-Midsize-Steel-Rose-Gold.jpg',
      title:"women hand watch",
      desc:"pure steel watch",
      rating:4,
      price:"30$"
    },
    {
      img:'/New folder/SEIKO_LUKIA_SUT336J1_SOLAR_RED_LEATHER_WOMEN_S_WATCH_1024x1024.webp',
      title:"women hand watch",
      desc:"pure lader watch",
      rating:4,
      price:"20$"
    },
    {
      img:'/New folder/5_ad9cd3f3-10fd-49e8-bc8e-99442ee2bb5a_1000x.webp',
      title:"women hand watch",
      desc:"pure lader watch",
      rating:4,
      price:"20$"
    },
    {
        img:'/New folder/istockphoto-1068843992-612x612.jpg',
        title:"women hand watch ",
        desc:"pure steel watch",
        rating:4,
        price:"25$"
    }
    ];
    const FemaleCollection = () => {
      return (
        <div>
          <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'> Womens Collection</h2>
    
            <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
            lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
    
    
           {productsData.map((item,index ) => (
            <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}
             /> 
        ))}
            </div>
    
          </div>
        </div>
      )
    }
    
    export default FemaleCollection
    
