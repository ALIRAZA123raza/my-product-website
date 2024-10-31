import Image from "next/image";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import Testimonial from "./components/Testimonial";
import FemaleCollection from "./components/femaleCollection";




export default function Home() {
  return (
    <div className="bg-slate-200">
      <Hero/>
      <NewProducts />
      <FemaleCollection/>
      
      <Testimonial />
      
    </div>
  
  );
}
