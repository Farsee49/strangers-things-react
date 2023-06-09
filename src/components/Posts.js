import React,{Fragment, useState} from "react";
import { Link, useParams} from 'react-router-dom'
import  { Alert,Typography,Button,Card} from '@mui/material';
import { deletePost, fetchPosts} from "../data-requests";


export default function Posts({posts,token,navigate,getPosts}) {
  async function handleClick(postId, token, getPosts) {
    try {
      const result = await deletePost(postId, token);
      if (result.success) {
        getPosts();
        navigate('/posts')
      } else {
        console.log(result.error);
      }
    } catch (err) {
      console.error(err);
    }
  };
    
 return(
  <>
  {
    posts&&posts.map((post) =>{
      return(
        
        <Fragment key={post._id}>
        {
          post.isAuthor?(
            <><Card variant="outlined"sx={{ minWidth: 275 }}>
            <h2>Title: {post.title}</h2>
            <h3>Description: {post.description}</h3>
            <h3>Price: {post.price}</h3>
            <h3>Location: {post.location}</h3>
            <h3>Author: {post.author.username}</h3> {post.willDeliver &&
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
              }
            )
          }
      </>
           
            <Button onClick={() => handleClick(post._id, token, getPosts)}
            variant="contained"color="error"size="small">Delete</Button>

            <Link to={`/edit-post/${post._id}`} >
            <Button  type='submit' variant='contained'size='small' >Edit Post
            </Button></Link>
            </Card></>
          ):(
            <><Card variant="outlined"sx={{ minWidth: 50 }}>
             <h2>Title: {post.title}</h2>
             <h3>Author: {post.author.username}</h3>
             <>{
              post.messages.map((message)=> {
                return(
                  <Fragment key={message._id}>
                    <h3>Message: {message.content}</h3>
                    <h3>From: {message.fromUser.username}</h3>
                  </Fragment>
                )
              }
            )
          }</>
             <Link to={`/message/${post._id}`} >
             <Button  type='submit' variant='contained'size='small'>Message
             </Button></Link>

             <Link to={`/single-post/${post._id}`} >
             <Button  type='submit' variant='contained'size='small'>View Post
             </Button></Link>
             </Card></>
            )
         } 
      </Fragment>  
      )
     }
    )    
  }
 </> 
 )
};
  
