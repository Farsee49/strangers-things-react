import React,{useState} from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import {login} from '../data-requests';


export default function Login({setToken, navigate}) {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
   // console.log(username, password);

   async function handleSubmit(ev) {
    ev.preventDefault()
    //console.log(9900)
    const user = {username, password}
    const results = await login(user);

    if(results.success) {
        setToken(results.data.token);
        window.localStorage.setItem('token', results.data.token);
        navigate('/Posts')
    }; 
  };
  
    return(
        <>
        <h1>Login</h1>
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
             <Button  type='submit' variant='contained'size='small'>Login</Button>
        </form>
       
        </>
    )
    
};