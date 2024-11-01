import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
      
<Link className='navbar_link relative' href="/">Home</Link>

<Link className='navbar_link relative' href="#NewProducts">categories</Link>

<Link className='navbar_link relative' href="#NewProducts">mens</Link>

<Link className='navbar_link relative' href="#FemaleCollection">womens</Link>

<Link className='navbar_link relative' href="#NewProducts">wall clock</Link>

            </div>
        </div>
      
    </div>
  )
}

export default Navbar
