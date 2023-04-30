import React,{Fragment, useState} from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'
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
            <p>{post.title}</p>
            <p>{post.description}</p>
            <p>{post.price}</p>
              {post.willDeliver &&
                <Typography  variant="subtitle1">
                 Available for Delivery
                </Typography>} <> {post.willDeliver === false &&
                <Typography  variant="subtitle1">
                  Not Available for Delivery
                </Typography>}</>
            <p>{post.location}</p>
           
            <Button onClick={() => handleClick(post._id, token, getPosts)}
            variant="contained"color="error"size="small">Delete</Button>

            <Link to={`/edit-post/${post._id}`} >
            <Button  type='submit' variant='contained'size='small' >Edit Post</Button></Link>
            </>
          ):(
            <>
             <p>{post.title}</p>
             <Button  type='submit' variant='contained'size='small'>Message</Button>

             <Link to={`/single-post/${post._id}`} >
              <Button  type='submit' variant='contained'size='small'>View Post</Button></Link>
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
  
