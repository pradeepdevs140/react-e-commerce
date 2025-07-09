import {useState , useEffect} from 'react';
import axios from 'axios';
function UseFetch(URL){
  let[data , setdata] = useState([])
  let[error , seterror] = useState("")
  let[isloading , setloading] = useState(true);
  useEffect( ()=>{
    let fetchAPI  = async()=>{
      try{
      //  let response =  await fetch(URL, {Method :"GET"});
       let response = await axios.get(URL);
       console.log(response.data);
      setdata(response.data);
       }
      catch(error){
        seterror(error);
      }
      finally{
        setloading(false); 
      }
    };
    fetchAPI();
  },[]
  )

  return {data , error , isloading ,setdata}
  
}
export default UseFetch;