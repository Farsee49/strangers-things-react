import React, {useState,useEffect} from "react";
import  {Card, Alert} from '@mui/material';
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function SinglePost({posts, token, getPosts,navigate}) {
  
    const { postId } = useParams();
    const [post] = posts.filter((post) => post._id === postId );
    const { title, description, location, price, willDeliver} = posts? posts: {};
    
    return(
    <><Card variant="outlined"sx={{ minWidth: 275 }}>
        <h1>Single Post</h1>
        <h2>Title: {post.title}</h2>
        <h3>Description: {post.description}</h3>
        <h3>Price: {post.price}</h3>
        <h3>Location:{post.location}</h3>
            {post.willDeliver &&
              <Alert severity="info">
                 Available for Delivery
              </Alert>}<> 
           </> 
      </Card>
    </>
  )
};