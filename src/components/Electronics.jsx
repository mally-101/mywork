import React from 'react'
import '../style/Electronics.css'
import useFetch from '../customHook/UseFetch'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import { ToastContainer , Toast } from 'react-bootstrap';
import Hero from './Hero';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';


const Electronics = () => {
   // const {handleAddToCart} = useContext(CartContext)
   const {handleAddToCart} = useContext(CartContext)
    const {data,loading} = useFetch('https://fakestoreapi.com/products/category/electronics'

    )
  return (
    <div>

        <div className='component-title'>
            <h2>ELECTRONICS CATEGORY</h2>
        </div>
        <main className='card-container-electronics my-4'>
            {data.map((datumElectronics)=>{
                const{id,image,price,title} = datumElectronics
                return(
                    <div key={id} className='text-center p-1 card-inner-electronics'>
                            <Card style={{ width: "100%" }}>
                    <Link to={`/SingleProduct/${id}`}>
                    <Card.Img variant="top"
                     src={image}
                      className="w-75" />

                    </Link>
                    <Card.Body>
                      <Card.Title>{title.slice(0, 5)}</Card.Title>
                      <Card.Text className='fw-bold text-danger'>${price}</Card.Text>
                      <ToastContainer/>
                      <Button onClick={()=>{handleAddToCart(datumElectronics);notify()}} variant="primary" className="btn-sm">Add to Cart</Button>
                    </Card.Body>
                  </Card>

                    </div>
                )
            }
            )}

        </main>
    </div>
  )
}

export default Electronics