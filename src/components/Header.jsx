
import React from 'react'

import hero from '../assets/hero.jpg'
const Header = () => {
  return (
   <header className='relative'>

     <h1 className='text-sm md:text-xl text-center text-white bg-gray-500 p-4 font-thin'>Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards. Shop
      
</h1>
<img src={hero} alt="Image" />
<div className="mt-4 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white">
  <h1 className='text-2xl md:text-4xl mb-1 font-semibold'>iPhone 16 Pro</h1>
  <p className='text-sm md:text-2xl mb-3'>Build For Apple Intelleigence</p>
  <div className='flex gap-3'>
 <button className='px-3 py-2 bg-blue-600 rounded-md' >Learn More</button>
  <button className='px-3 py-2 border-2 border-blue-600 rounded-md'>Buy</button>
  
  </div>
 
</div>

</header>  )
}

export default Header

