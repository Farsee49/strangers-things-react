import React from "react";
import { Link } from "react-router-dom";
import  { Button } from '@mui/material';



export default function Header({setToken, setIsLoggedIn, isLoggedIn,navigate}) {
    function logout(){
    setToken('');
    window.localStorage.removeItem('token');
    setIsLoggedIn(false);
    console.log(isLoggedIn)
    navigate('/login')
   
    };
    return (
    <header>
        <h1>Otter Pit</h1>
        {isLoggedIn ?(<>
         <Button variant="contained" size="small" onClick={logout}>LogOut</Button>
         <Link to='/createpost'><Button variant="contained" size="small">
            NewPost</Button></Link>
         <Link to='/posts'><Button variant="contained" size="small">
            Posts</Button></Link>
         <Link to='/profile/:postId'><Button variant="contained" size="small">
            Profile</Button></Link>
    </>):(<>
        <Link to='/login'><Button variant="contained" size="small">
            Login</Button></Link>
        <Link to='/reg'><Button  type='submit' variant='contained'size='small'>
            Register</Button></Link>
        <Link to='/posts'><Button  type='submit' variant='contained'size='small'>
            Posts</Button></Link></>)}
    </header>
  )
};