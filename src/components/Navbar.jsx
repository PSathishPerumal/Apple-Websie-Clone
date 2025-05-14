import React from 'react'
import {FaApple, FaSearch, FaShoppingBag,FaBars} from "react-icons/fa"

const Navbar = () => {
  return (
   <>
   <nav className='w-full flex justify-between sticky top-0 left-0 bg-opacity-65 bg-black md:flex md:bg-opacity-90 md:justify-center md:bg-gray-800 text-white p-4 z-10 md:sticky md:top-0 md:left-0'>
<FaApple className='size-6'></FaApple>
<ul className='hidden md:flex gap-4 ml-6 justify-center items-center text-sm'>
  <li className='hover:text-gray-400 cursor-pointer'>Store</li>
<li className='hover:text-gray-400 cursor-pointer'>Mac</li>
<li className='hover:text-gray-400 cursor-pointer'>iPad</li>
<li className='hover:text-gray-400 cursor-pointer'>iPhone</li>
<li className='hover:text-gray-400 cursor-pointer'>Watch</li>
<li className='hover:text-gray-400 cursor-pointer'>AirPods</li>
<li className='hover:text-gray-400 cursor-pointer'>TV & Home</li>
<li className='hover:text-gray-400 cursor-pointer'>Entertainment</li>
<li className='hover:text-gray-400 cursor-pointer'>Accessories</li>
<li className='hover:text-gray-400 cursor-pointer'>Support</li>
</ul>

<div className='flex justify-between space-x-5 md:flex items-center ml-3'>
    <FaSearch className='size-5'></FaSearch>
    <FaShoppingBag className='size-5 '></FaShoppingBag>
<FaBars className='size-5 md:hidden'></FaBars>
</div>
   </nav>
   
   
   </>
  )
}

export default Navbar