import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className='flex justify-between items-center'>
          <div className='hidden lg:flex gap-1'>
            <div className='header_top_icon_wrapper'>
            <FaFacebook />
            </div>
            <div className='header_top_icon_wrapper'>
            <IoLogoYoutube />
            </div>
            <div className='header_top_icon_wrapper'>
            <FaLinkedin />
            </div>
            <div className='header_top_icon_wrapper'>
            <FaInstagram />
            </div>
            <div className='text-gray-500 text-[12px]'></div>
             <b>FREE DELEVRY</b> ORDER NOW
          </div>
          <div className='flex gap-4'>
            <select className='text-gray-500 text-[12px] w-[70px]' 
            name="currency" 
            id="currency">
              <option value="PKR">PKR</option>
               <option value="USD">USD</option>
               <option value="EUR">EUR</option>
            </select>
            <select
            className='text-gray-500 text[12px]'
            name="language" 
            id="language">
              <option value="English">English</option>
              <option value="French">French</option>
            </select>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
