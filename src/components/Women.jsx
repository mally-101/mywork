import React from 'react'
import '../style/Women.css'
import useFetch from '../customHook/UseFetch'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import { ToastContainer , Toast } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';

const Women = () => {
  // const {handleAddToCart} = useContext(CartContext)
  const {handleAddToCart} = useContext(CartContext)
    const {data,loading} = useFetch("https://fakestoreapi.com/products/category/women's clothing")

  return (
    <div>
        <div className='component-title'>
            <h2>WOMEN CATEGORY</h2>
        </div>
        <main className='card-conatiner-women'>
            {data.map((datumWomen)=>{
                const {id,image,price,title} = datumWomen
                return(
                    <div key={id} className='card-container-data, shadow-lg'>
                             <Card style={{ width: "12rem" }}>
                    <Link to={`/SingleProduct/${id}`}>
                    <Card.Img variant="top"
                     src={image}
                      className="w-75 pt-3" />

                    </Link>
                    <Card.Body>
                      <Card.Title>{title.slice(0, 25)}</Card.Title>
                      <Card.Text className='fw-bold text-danger'>${price}</Card.Text>
                      <ToastContainer/>
                      <Button onClick={()=>{handleAddToCart(datumWomen);notify()}} variant="primary" className="btn-sm">Add to Cart</Button>
                    </Card.Body>
                  </Card>

                    </div>
                )
            }
            
            
            )
            }

        </main>
    </div>
  )
}

export default Women