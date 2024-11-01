
import React from 'react'
import ProductCard from './ProductCard';

const productsData =[
{
    img:'/steel chain wach-1.jpg',
    title:"men hand wach",
    desc:"pure steel chain wach",
    rating:4,
    price:"25$"
},
{
    img:'/lader wach-1.jpg',
    title:"men hand wach",
    desc:"pure lader wach",
    rating:4,
    price:"20$"
},
{
    img:'/lader wach-2.jpg',
    title:"men hand wach",
    desc:"pure lader wach",
    rating:4,
    price:"22$"
},
{
    img:'/sport wach-1.jpg',
    title:"men hand wach",
    desc:"pure lader wach",
    rating:4,
    price:"22$"
},
{
  img:'/pexels-ferarcosn-190819.jpg',
  title:"men hand wach",
  desc:"pure steel wach",
  rating:4,
  price:"30$"
},
{
  img:'/images (1).jpeg',
  title:"men hand wach",
  desc:"pure lader wach",
  rating:4,
  price:"20$"
},
{
  img:'/images.jpeg',
  title:"men hand wach",
  desc:"pure laderwach",
  rating:4,
  price:"20$"
},
{
    img:'/wall clock-1.jpg',
    title:"wall clock ",
    desc:"pure  wach",
    rating:4,
    price:"25$"
}
];
const NewProducts = () => {
  return (
    <div>
      <div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-4'> New Products</h2>

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

export default NewProducts
