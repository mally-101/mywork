import React, { useEffect } from 'react'
import Hero from '../components/Hero'

const Home = ({cart,handleAddToCart, setCart}) => {
    useEffect(()=>{
        document.title = 'Home | Page'

    })
  return (
    <div className='container'>
      <Hero cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>
    </div>
  )
}

export default Home