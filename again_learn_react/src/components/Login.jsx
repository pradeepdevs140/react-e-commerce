import React from 'react'
import { useParams } from 'react-router-dom'

const Login = () => {
  let {user} = useParams()
  
  return (
    <div>
      <h1>Login-{user}</h1>

      
    </div>
  )
}

export default Login
