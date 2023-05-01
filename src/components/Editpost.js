import React, { useState } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';

import { updatePost } from '../data-requests';
import  { Alert,Typography,Button,TextField,Checkbox,Card } from '@mui/material';


export default function EditPost({posts, token, getPosts}){
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post] = posts.filter((post) => post._id === postId );
    const { title, description, location, price, willDeliver} = posts? post: {};
    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [updatedLocation, setUpdatedLocation] = useState(location);
    const [updatedPrice, setPrice] = useState(price);
    const [updatedDescription, setUpdatedDescription] = useState(description);
    const [updatedWillDeliver, setWillDeliver] = useState(willDeliver);
    
    async function handleSubmit(event){
        event.preventDefault();
       
        const updatedPost = {
          title: updatedTitle,
          location: updatedLocation,
          description: updatedDescription,
          price: updatedPrice,
          willDeliver: updatedWillDeliver  
        };
        const results= await updatePost(postId, token, updatedPost);
        if(results.success){
            getPosts();
            navigate('/posts');
        }
     };
  
    return(<>
    {post?
      (<>
             <h1>EditPost</h1>
             <Card variant="outlined"sx={{ minWidth: 275 }}>
       <form onSubmit={handleSubmit}>
            <TextField id="filled"  variant="standard"
              type="text"
               value={updatedTitle}
               onChange={(ev) => setUpdatedTitle(ev.target.value)}
            />
            <TextField id="filled-basic"  variant="standard"
              type="text"
              placeholder='Desc'
              value={updatedDescription}
               onChange={(ev) => setUpdatedDescription(ev.target.value)}
            />
            <TextField id="filled-basic"  variant="standard"
              type="text"
              
               value={updatedPrice}
              onChange={(ev) => setPrice(ev.target.value)}
            />
             <TextField id="filled-basic"  variant="standard"
              type="text"
              placeholder='location'
               value={updatedLocation}
               onChange={(ev) => setUpdatedLocation(ev.target.value)}
            />
            <Checkbox
              label= 'Deliver'
              checked={updatedWillDeliver}
              onChange={() => setWillDeliver(!updatedWillDeliver)}
            /><>Available for Delivery     </>
            <Button  type='submit' variant='contained'size='small'>Save Changes</Button>
          </form>
          <p>Title: {post.title}</p>
          <p>Description: {post.description}</p>
          <p>Price: {post.price}</p>
          <p>Location: {post.location}</p>
          <p>{post.message}</p>
          <> {post.willDeliver &&
                <Alert severity="info">
                  Available for Delivery
                </Alert>}</> <> {post.willDeliver === false &&
                 <Alert severity="info">
                  Not Available for Delivery
                </Alert>}</>
        </Card></>):(<Alert severity="error">no post</Alert>)
    }
         </>)
}