import React from 'react'
import '../style/Jewelry.css'
import useFetch from '../customHook/UseFetch'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import { ToastContainer , Toast } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';


const Jewelry = () => {
   // const {handleAddToCart} = useContext(CartContext)
   const {handleAddToCart} = useContext(CartContext)
    const {data,loading} = useFetch('https://fakestoreapi.com/products/category/jewelery')

  return (
    <div>
        <div className='component-title'>

        <h2>JEWELRY CATEGORY</h2>

        </div>
        <main className='card-container-jewelry my-4'>
            {data.map((datumJewelry)=>{
                const{id,image,price,title} = datumJewelry
                return(
                    <div key={id} className='text-center p-1 card-inner-jewelry'>
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
                      <Button onClick={()=>{handleAddToCart(datumJewelry);notify()}} variant="primary" className="btn-sm">Add to Cart</Button>
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

export default Jewelry