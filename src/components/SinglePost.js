import React, {useState} from "react";
import  { Alert,Typography,Button,} from '@mui/material';
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
          <h3>Location:{post.location}</h3>
               {post.willDeliver &&
                <Alert severity="info">
                 Available for Delivery
                </Alert>} <> {post.willDeliver === false &&
                <Alert severity="info">
                  Not Available for Delivery
                </Alert>}</>
                <>{
              post.messages.map((message)=> {
                return(
                  <Fragment key={message._id}>
                    <h3>Message: {message.content}</h3>
                    <h3>From: {message.fromUser.username}</h3>
                  </Fragment>
                )
              })
              }</>
          
    </>)
}