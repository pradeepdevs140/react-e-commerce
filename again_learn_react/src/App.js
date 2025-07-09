import React, { Component, useEffect } from 'react';
import './App.css';
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Cartlis from './components/Cartlis.jsx'
import Cartdetails from './components/Cartdetails.jsx'
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './card.jsx'
import NotFound from './components/NotFound.jsx'
import Newproducts from './components/Newproducts.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import NavBar from './components/NavBar.jsx';
import Wishlist from './components/Wishlist.jsx'
class App extends Component {
  render() {
    if(!localStorage.getItem("cart")){
      localStorage.setItem("cart" , JSON.stringify([]))
    }
   let datafromweb= JSON.parse(localStorage.getItem("cart"))
   console.log(datafromweb);
    let user ="pradeep";
    return (
      <div className="App">

   
      <Router>
        <NavBar />
        <Routes>
           
          <Route path = "/" element ={<Home/>} />
          <Route path="/cardlist" element={<Cartlis />} />
          <Route path = "/login/:user"element ={<Login/>} />
          <Route path = "/signup" element ={<Signup/>} />
          <Route path ="/newproduct" element = {<Newproducts />} />
          <Route path ="/updateform/:id" element ={<UpdateForm />} />
          <Route path ="/wishlist" element ={<Wishlist />} />
        
          <Route path = "/cart" element ={<Cartlis/>} >
            <Route path = "list" element = {<Cartlis />} />
            <Route path = "details" element ={<Cartdetails />} />
          </Route>
          <Route path="*"  element= { <NotFound />} />
        </Routes>
        
       </Router>
      </div>
    );
  }
}

export default App;
