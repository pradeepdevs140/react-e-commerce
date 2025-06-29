import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ThreeDot } from 'react-loading-indicators';
import UseFetch from './customHook/UseFetch';
import { HiShoppingBag } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
import Swal from 'sweetalert2';
import '../index.css'
import {useDispatch , useSelector} from 'react-redux'
import {additem} from '../store/CartSlice.js'
const Cartlis = () => {
  const navigate = useNavigate();
  const { data, error, isloading, setdata } = UseFetch("http://localhost:4000/products");

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:4000/products/${id}`).then(() => {
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
          const newData = data.filter(product => product.id !== id);
          setdata(newData);
        });
      }
    });
  };
  let cartstate = useSelector((state)=>{return state.cart});
  let dispatch = useDispatch()
let additemtocart =(product)=>{
  let check = cartstate.some(cartproduct=>cartproduct.id===product.id)
  if(!check){
  dispatch(additem(product))
  Swal.fire({
    title:"Success",
    text :"Product added Sucessfully",
    icon: "success",
  
  })

  }
 else{
   Swal.fire({
      title: "Already ",
      text: "Product  added",
      icon: "error",
      footer: "<p>Add Some Other Product</p>"
      
    })
 }

}
  if (isloading) {
    return (
      <center>
        <div style={{ alignItems: "center", color: "black" }}>
          <ThreeDot variant="bob" color="#32cd32" size="medium" text="Loading..." textColor="#231919" />
        </div>
      </center>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <article style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>To create New Product</h3>
        <Button variant="success" onClick={() => navigate("/newproduct")}>Add Product</Button>
      </article>

      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Product List</h1>

      {data.length !== 0 &&
        <section className="products">
          {data.map((product) => (
            <Card key={product.id} className="product-card">
              <center>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: '9rem', height: '12rem', objectFit: 'contain', marginTop: '10px' }}
                />
              </center>

              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title style={{ fontSize: '1rem', minHeight: '3rem', overflow: 'hidden' }}>
                  {product.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  ₹{product.price}
                </Card.Text>
              </Card.Body>

              <Card.Footer style={{ background: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                  <Button variant="primary" onClick ={()=>additemtocart(product)}><HiShoppingBag /></Button>
                  <Button variant="secondary" onClick={() => navigate(`/updateform/${product.id}`)}><CiEdit /></Button>
                  <Button variant="danger" onClick={() => handledelete(product.id)}><MdDeleteForever /></Button>
                </div>
              </Card.Footer>
            </Card>
          ))}
        </section>
      }

      {error && <h2 style={{ color: "red", textAlign: "center" }}>{error.message}</h2>}
    </div>
  );
};

export default Cartlis;
