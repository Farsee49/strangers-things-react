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
        <p>Title: {post.title}</p>
          <p>Description: {post.description}</p>
          <p>Price: {post.price}</p>
               {post.willDeliver &&
                <Typography  variant="primary">
                 Available for Delivery
                </Typography>} <> {post.willDeliver === false &&
                <Typography  variant="primary">
                  Not Available for Delivery
                </Typography>}</>
          <p>Location: {post.location}</p>
    </>)
}