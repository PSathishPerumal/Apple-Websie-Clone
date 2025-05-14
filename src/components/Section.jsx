import React from 'react'
import {FaApple} from "react-icons/fa"
import watch from "../assets/watch.jpg"
const Section = () => {
  return (
    <section className='relative md:mt-4'>
<img src={watch} alt="Image" />
<div className='absolute  top-6 left-20 md:top-24 md:left-80'>
<div className='flex items-center justify-center'>
    <FaApple size={46}></FaApple>
    <h1 className='text-xl md:text-5xl font-bold mt-2'>Watch</h1>
    </div>
    <div>
        <p className='text-sm md:text-3xl font-light'>Show Your Stripes With New Pride Edition Sports Band!</p>
        <button className=' ml-36 md:flex py-2 px-2 rounded-lg bg-blue-600 text-white md:ml-80'>Buy</button>
    </div>
</div>



    </section>
  )
}

export default Section