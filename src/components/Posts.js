import React,{Fragment, useState} from "react";
import { Link, useParams} from 'react-router-dom'
import  { Typography,Button,} from '@mui/material';
import { deletePost, fetchPosts} from "../data-requests";
//import {getPosts} from './App';




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
            <>
            <h2>{post.title}</h2>
            <h3>{post.description}</h3>
            <h3>{post.price}</h3>
              {post.willDeliver &&
                <Typography  variant="subtitle1">
                 Available for Delivery
                </Typography>} <> {post.willDeliver === false &&
                <Typography  variant="subtitle1">
                  Not Available for Delivery
                </Typography>}</>
            <h3>{post.location}</h3>
            <h3>{post.author.username}</h3>
            <p>{
              post.messages.map((message)=> {
                return(
                  <Fragment key={message._id}>
                    <h3>Message: {message.content}</h3>
                    <h3>From: {message.fromUser.username}</h3>
                  </Fragment>
                )
              })
              }</p>
           
            <Button onClick={() => handleClick(post._id, token, getPosts)}
            variant="contained"color="error"size="small">Delete</Button>

            <Link to={`/edit-post/${post._id}`} >
            <Button  type='submit' variant='contained'size='small' >Edit Post
            </Button></Link>
            </>
          ):(
            <>
             <h2>{post.title}</h2>
             <h3>{post.author.username}</h3>
             <Link to={`/message/${post._id}`} >
             <Button  type='submit' variant='contained'size='small'>Message
             </Button></Link>

             <Link to={`/single-post/${post._id}`} >
             <Button  type='submit' variant='contained'size='small'>View Post
             </Button></Link>
             </>
            )
        }
        </Fragment>
      )
    })    
  }
 </> 
)
};
  
