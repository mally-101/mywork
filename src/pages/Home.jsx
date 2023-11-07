import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Electronics from '../components/Electronics'
import Women from '../components/Women'
import LastPage from '../components/LastPage'
import Jewelry from '../components/Jewelry'

const Home = ({cart,handleAddToCart, setCart}) => {
    useEffect(()=>{
        document.title = 'Home | Page'

    })
    return (
      <div className='container'>
  
  
          <Hero />
          <Electronics />
          <Women />
          <Jewelry />
  
          
          <LastPage/>
          {/* <Hero cart={cart} handleAddToCart={handleAddToCart} 
          
          setCart={setCart}/>
          <Electronics cart={cart} handleAddToCart={handleAddToCart}
          setCart={setCart} />
          <Women handleAddToCart={handleAddToCart}
          setCart={setCart}/>
          <Jeweries handleAddToCart={handleAddToCart}
          setCart={setCart}/>
  
          
          <LastPage/> */}
      </div>
    )
  }
  
  export default Home