import React from 'react'
import mother from "../assets/mother.jpg"
const Hero = () => {
  return (
    
    <hero className='hidden md:flex relative'>
<img src={mother} alt="Image" />
    <div className='absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-5xl font-bold text-center'>Mother's Day</h1>
        <p className='text-3xl font-light'>It's Not To Late For Find The Perfect Gift For Mom!</p>
        <button className=' text-white bg-blue-600 px-2 py-1 rounded-lg ml-72'>Shop</button>
    </div>


    </hero>
        


      )
}

export default Hero