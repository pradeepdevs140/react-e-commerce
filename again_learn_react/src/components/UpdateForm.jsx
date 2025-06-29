import React, { useEffect } from 'react'
import {useState} from 'react';
import Grid2 from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const UpdateForm = () => {
  let paperstyel= {
        width:400,
        margin:"20px auto",
        padding:"20px",
    }
  let [upadte ,setupadte]= useState(null)

  let {id}= useParams();
  useEffect(()=>{
    axios.get(`http://localhost:4000/products/${id}`)
    .then(res => setupadte(res.data))
    
  },[])
  let handlechange = (e)=>{
    let{value , name }= e.target;
    let filedname = name.split("rating.")[1]
    if(name.includes("rating.")){
      setupadte({
        ...upadte ,
        rating : {
          ...upadte.rating,
          [filedname]: value
        }
      }
      )
    }
    else{
      setupadte({
      ...upadte ,
      [name]: value
    })
    }
    
    
  }

  let handleadd =(e)=>{
    e.preventDefault()
    fetch(`http://localhost:4000/products/${id}`,
      {   
      method :"PUT",
      headers:{
        "Content-Type" : "application/json",
      },
      body:JSON.stringify(upadte)
      }
    ).then(()=>{
      console.log("data Saved sucessfully")
      setupadte({
          
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
  if(upadte!=null){
     return (
    <div>
      <Paper elevation={20} style = {paperstyel}>
        <Typography variant ='h2' textAlign ="center">Update Product</Typography>
        <Grid2 component = "form" style={{display:"grid", gap :"20px"}} onSubmit ={handleadd} >
            <TextField  value ={upadte.title} name = "title"id="standard-basic" label="Name" variant="standard" fullWidth
            onChange ={handlechange}/>
             <TextField value = {upadte.category} name = "category"id="standard-basic" label="tite" variant="standard" fullWidth
             onChange ={handlechange}/>
             <Grid2 container spacing ={2}>
                <Grid2 size={6}>
                     <TextField value = {upadte.rating.rate}name = "rating.rate"id="standard-basic" type ="number" label="rate" variant="standard" 
                     onChange ={handlechange}/>
                </Grid2>
                <Grid2 size={6}>
                      <TextField value={upadte.rating.count} name = "rating.count"id="standard-basic"  label="count" variant="standard" type="number" 
                      onChange ={handlechange}/>
                </Grid2>
                </Grid2>
               <Button type ="submit" variant="contained" fullWidth color="success" >ADD</Button>
        </Grid2> 
      </Paper>
    </div>
  )
  }
  else{
   
    <center><h1>Loading......</h1></center>
  }
 
}

export default UpdateForm
