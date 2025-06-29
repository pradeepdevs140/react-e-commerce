import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiShoppingBag } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import {removeitem } from '../store/CartSlice.js'
const Wishlist = () => {
      let dispatch  = useDispatch()
    let handledelete =(id)=>{
      dispatch(removeitem(id))
    }
    let navigate = useNavigate()
    let data = useSelector((state)=>{return state.cart})
    console.log(data)
  return (
       <div style={{ padding: "20px" }}>
      <article style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>To create New Product</h3>
        <Button variant="success" onClick={() => navigate("/newproduct")}>Add Product</Button>
      </article>

      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Product List</h1>

      {data.length !== 0 ?(
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
                 
                  <Button variant="danger" onClick={() => handledelete(product.id)}><MdDeleteForever /></Button>
                </div>
              </Card.Footer>
            </Card>
          
          ))}
          
        </section>
      ):
      <h1>Purchase somthing </h1>
      }

     
    </div>
  )
}

export default Wishlist
