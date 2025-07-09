import React from 'react'
import {useState} from 'react';
import Grid2 from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';

let Newproducts = () => {
    let paperstyel= {
        width:400,
        margin:"20px auto",
        padding:"20px",
    }
  let [newproduct ,setnewproduct]= useState({
  
    "title": "",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 0,
      "count": 0
    }
    
  })
  let handlechange = (e)=>{
    let{value , name }= e.target;
    let filedname = name.split("rating.")[1]
    if(name.includes("rating.")){
      setnewproduct({
        ...newproduct ,
        rating : {
          ...newproduct.rating,
          [filedname]: value
        }
      }
      )
    }
    else{
      setnewproduct({
      ...newproduct ,
      [name]: value
    })
    }
    
    
  }
  console.log(newproduct);
  let handleadd =(e)=>{
    e.preventDefault()
    fetch("http://localhost:4000/products",
      {   
      method :"POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body:JSON.stringify(newproduct)
      }
    ).then(()=>{
      console.log("data add sucessfully")
      setnewproduct({
          
    "title": "",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 0,
      "count": 0
    }
    })
  })
    
  }
  return (
    <div>
      <Paper elevation={20} style = {paperstyel}>
        <Typography variant ='h2' textAlign ="center">Create a Form</Typography>
        <Grid2 component = "form" style={{display:"grid", gap :"20px"}} onSubmit ={handleadd} >
            <TextField  value ={newproduct.title} name = "title"id="standard-basic" label="Name" variant="standard" fullWidth
            onChange ={handlechange}/>
             <TextField value = {newproduct.category} name = "category"id="standard-basic" label="tite" variant="standard" fullWidth
             onChange ={handlechange}/>
             <Grid2 container spacing ={2}>
                <Grid2 size={6}>
                     <TextField value = {newproduct.rating.rate}name = "rating.rate"id="standard-basic" type ="number" label="rate" variant="standard" 
                     onChange ={handlechange}/>
                </Grid2>
                <Grid2 size={6}>
                      <TextField value={newproduct.rating.count} name = "rating.count"id="standard-basic"  label="count" variant="standard" type="number" 
                      onChange ={handlechange}/>
                </Grid2>
                </Grid2>
               <Button type ="submit" variant="contained" fullWidth >ADD</Button>
        </Grid2> 
      </Paper>
    </div>
  )
}

export default Newproducts
