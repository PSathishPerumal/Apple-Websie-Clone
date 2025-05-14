import React from 'react'
import ipad from '../assets/ipad.jpg'
import iphone from '../assets/iphone.jpg'
import iphone16 from '../assets/iphone16.jpg'
import macbook from '../assets/macbook.jpg'
import man from '../assets/man.jpg'
import watch2 from '../assets/watch2.jpg'
import {FaApple} from 'react-icons/fa'

const Section2 = () => {
  return (
    <section className='grid grid-cols-1 md:grid md:grid-cols-2 justify-evenly mt-5'>

<div className="imagecontainer relative">
<img className='bg-cover bg-center px-3 py-3 h-[700px] w-[750px]' src={ipad} alt="Ipad" />
<div className=' top-16 left-20 absolute md:mt-20 md:top-6 md:left-36'>
<h1 className='text-4xl text-center md:text-center md:text-5xl font-bold mb-2'>Ipad Air</h1>
<p className='text-2xl md:text-3xl font-thin mb-2'>Now Super Charged By M3 Ship !</p>
<button className='ml-36 md: bg-blue-600 px-2 py-2 text-white rounded-lg md:ml-44'>Buy</button>
</div>
</div>

<div className="imagecontainer relative">
<img className='bg-cover bg-center px-3 py-3 h-[700px] w-[750px]' src={iphone} alt="Ipad" />
<div className='top-16 left-20 absolute md:mt-20 md:top-6 md:left-36'>
<h1 className='text-4xl text-center md:text-center md:text-5xl font-bold mb-2'>Trade In</h1>
<p className='text-2xl md:text-3xl font-thin mb-2'>Upgrade And Use ! It's That Easy</p>
<button className='ml-24 md: bg-blue-600 px-2 py-2 text-white rounded-lg md:ml-44'>Get Estimate</button>
</div>
</div>

<div className="imagecontainer relative">
<img className='bg-cover bg-center px-3 py-3 h-[700px] w-[750px]' src={iphone16} alt="Ipad" />
<div className='bottom-14 left-28 absolute md:mt-20 md:bottom-14 md:left-36 text-white'>
<h1 className='text-4xl text-center md:text-center md:text-5xl font-bold mb-2'>iPhone16</h1>
<p className='text-2xl md:text-3xl font-thin mb-2'>Build For Apple Intelligence</p>
<button className='ml-28 md: bg-blue-600 px-2 py-2 text-white rounded-lg md:ml-36'>Buy</button>
</div>
</div>

<div className="imagecontainer relative">
<img className='bg-cover bg-center px-3 py-3 h-[700px] w-[750px]' src={macbook} alt="Ipad" />
<div className='top-16 left-24 absolute md:mt-20 md:top-6 md:left-36'>
<h1 className='text-4xl text-center md:text-center md:text-5xl font-bold mb-2'>MacBook Air</h1>
<p className='text-2xl md:text-3xl font-thin mb-2'>Sky Blue Color Build Your Passion</p>
<button className='ml-32 md: bg-blue-600 px-2 py-2 text-white rounded-lg md:ml-44'>Buy</button>
</div>
</div>

<div className="imagecontainer relative">
<img className='bg-cover bg-center px-3 py-3 h-[700px] w-[750px]' src={man} alt="Ipad" />
<div className='bottom-14 left-28 absolute md:mt-20 md:bottom-14 md:left-36 text-white'>
<h1 className='text-4xl text-center md:text-center md:text-5xl font-bold mb-2'>AirPods-4</h1>
<p className='text-2xl md:text-3xl font-thin mb-2'>Iconic ! Now Super Sonic !</p>
<button className='ml-24 md: bg-blue-600 px-2 py-2 text-white rounded-lg md:ml-36'>Buy</button>
</div>
</div>

<div className="imagecontainer relative">
<img className='bg-cover bg-center px-3 py-3 h-[700px] w-[750px]' src={watch2} alt="Ipad" />
<div className='top-16 left-14 absolute md:mt-20 md:top-6 md:left-36'>
<div className='flex justify-center'>
<FaApple size={48}></FaApple><h1 className='text-4xl text-center md:text-center md:text-5xl font-bold mb-2'>Watch</h1>
</div>
<p className='text-2xl md:text-3xl font-thin mb-2'>Show Your Stripes With Sports Edition</p>
<button className='ml-44 md: bg-blue-600 px-2 py-2 text-white rounded-lg md:ml-52'>Buy</button>
</div>
</div>
    </section>


  )
}

export default Section2