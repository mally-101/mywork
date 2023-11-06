import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "../style/Hero.css";
import useFetch from "../customHook/UseFetch";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Hero = ({cart,setCart,handleAddToCart}) => {
  const { data: data, loading: loading } = useFetch(
    "https://fakestoreapi.com/products/14"
  );

  const { data: data2, loading: loading2 } = useFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const notify = () =>{
    toast("An item has been added",{
        position:toast.POSITION.TOP_CENTER
    });
 };
  // console.log(data);
  return (
    <div className="container my-5 hero-container">
      <h2>{loading && <ClipLoader />}</h2>
      <div className="row justify-content-between gap-5">
        <div className="col-sm-12 col-lg-6">
        <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={data.image} className=" hero-img" />
          </Card>


          {/* <img src={data.image} alt={data.title} className="w-100 hero-img" /> */}
        </div>
        {/*card section*/}
        <div className="col-sm-12 col-lg-5">
          <div className="card-container">
            {data2.map((datum2) => {
              const { id, title, image, price } = datum2;
              return (
                <div key={id} className="card-inner h-25 text-center">
                  <Card style={{ width: "100%" }}>
                    <Link to={`/SingleProduct/${id}`}>
                    <Card.Img variant="top"
                     src={image}
                      className="w-75" />

                    </Link>
                    <Card.Body>
                      <Card.Title>{title.slice(0, 5)}</Card.Title>
                      <Card.Text>${price}</Card.Text>
                      <ToastContainer/>
                      <Button onClick={()=>{handleAddToCart(datum2);notify()}} variant="primary" className="btn-sm">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
