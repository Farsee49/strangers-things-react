import React, {useState} from "react";
import  { Typography,Button,} from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";



export default function SinglePost({posts, token, getPosts}) {
  
    const { postId } = useParams();
    const [post] = posts.filter((post) => post._id === postId );
    const { title, description, location, price, willDeliver} = posts? post: {};
     console.log(post)

    
    return(<>
        <h1>Single Post</h1>
        <h2>Title: {post.title}</h2>
          <h3>Description: {post.description}</h3>
          <h3>Price: {post.price}</h3>
               {post.willDeliver &&
                <Typography  variant="h6">
                 Available for Delivery
                </Typography>} <> {post.willDeliver === false &&
                <Typography  variant="h6">
                  Not Available for Delivery
                </Typography>}</>
          <h3>Location: {post.location}</h3>
    </>)
}