import React,{Fragment, useState} from "react";
import { Link, useParams} from 'react-router-dom'
import  { Alert,Typography,Button,} from '@mui/material';
import { deletePost, fetchPosts} from "../data-requests";



export default function MyProfile({posts,token,navigate,getPosts,user}) {
    let alert = 'No Posts Found';
  async function handleClick(postId, token, getPosts) {
    
    try {
      const result = await deletePost(postId, token);
      if (result.success) {
        getPosts();
        navigate('/profile')
      } else {
        console.log(result.error);
      }
    } catch (err) {
      console.error(err);
    }
  };
  console.log(user)
     
  return(
    <> <h1>MyMessages</h1>
    {
    user.messages.map((message)=> {
      return(
        <Fragment key={message._id}>
          <h3>Message: {message.content}</h3>
          <h3>From: {message.fromUser.username}</h3>
        </Fragment>
      )
    })
    }
    <br/>
    <h1>MyPosts</h1>
    
      {posts&&posts.map((post) =>{
        return(
          <Fragment key={post._id}>
          
           { post.isAuthor&&
              <>
              <h2>{post.title}</h2>
              <h3>{post.description}</h3>
              <h3>{post.price}</h3>
               
              <h3>{post.location}</h3>
              <h3>{post.author.username}</h3> {post.willDeliver &&
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
             
              <Button onClick={() => handleClick(post._id, token, getPosts)}
              variant="contained"color="error"size="small">Delete</Button>
  
              <Link to={`/edit-post/${post._id}`} >
              <Button  type='submit' variant='contained'size='small' >Edit Post
              </Button></Link>
              </>
            }
            </Fragment>)})}</>)}
        
          
          
            

    