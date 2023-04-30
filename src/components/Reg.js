import React, { useState } from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { registerUser } from "../data-requests";
import { Navigate } from "react-router-dom";



export default function Register({setToken,navigate}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
   
    //console.log(username, password);

   async function handleSubmit(ev) {
    ev.preventDefault()
    //console.log(9900)
    const user = {username, password}
    const results = await registerUser(user);
    if(results.success) {
        setToken(results.data.token);
        window.localStorage.setItem('token', results.data.token);
        navigate('/posts')
    } 
  }
  
    return(
        <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <TextField id="filled-basic"  variant="standard"
            type ='text'
            placeholder="UserName"
            onChange={(ev)=> setUsername(ev.target.value)}
          />
         <TextField id="filled-basic"  variant="standard"
            type ='text'
            placeholder="PassWord"
            onChange={(ev)=> setPassword(ev.target.value)}
          />
            <Button  type='submit' variant='contained'size='small'>SUBMIT</Button>
        </form>
       
        </>
    )
    
   

}