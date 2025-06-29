import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState , useEffect } from 'react';
import UseFetch from './customHook/UseFetch';
import axios from 'axios';
const Home = () => {

  let{data} = UseFetch("http://localhost:4000/products");
 return (
  <>
  <h1>Home </h1>
  <h1>Total Products - {data.length}</h1>
  </>
 )
}

export default Home
