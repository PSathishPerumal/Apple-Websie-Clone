import React from 'react'

const Footer2 = () => {
  return (
   
   <footer className='bg-gray-800 py-5'>
     <hr className="w-[90%] mx-auto" />
<div className='flex flex-col px-10 gap-5 text-white md:flex md:flex-row md:justify-around py-5'>
       <div>
        <h1 className='text-xl'>Shop & Learn</h1>
        <ul>
<li>Store</li>
<li>Mac</li>
<li>iPad</li>
<li>iPhone</li>
<li>Watch</li>
<li>AirPods</li>
        </ul>
        
        </div> 
        <div>
        <h1 className='text-xl'>Account</h1>
        <ul>
<li>Manage Your Account</li>
<li>Sign In</li>
<li>Create Account</li>
<li>Order History</li>
<li>Billing Information</li>
<li>Payment Methods</li>
<li>Subscriptions</li>
        </ul>
        
        </div> 

        <div>
        <h1 className='text-xl'>Apple Store</h1>
        <ul>
<li>Apple Store</li>
<li>Mac</li>
<li>Laptop</li>
<li>MacBook</li>
<li>Your Shoplist</li>
<li>Payment Methods</li>
<li>Orders</li>
        </ul>
        
        </div> 
        </div>
         <hr className="w-[90%] mx-auto" />
    <div className='bg-gray-800 text-white text-center py-4'>
        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
    </div>
    </footer>
    
  )
}

export default Footer2