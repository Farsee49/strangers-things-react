import React, {useState} from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { makePost } from '../data-requests'
import { Navigate } from "react-router-dom";

export default function CreatePost({token, getPosts, navigate}) {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState('')

   async function handleSubmit(event) {
        event.preventDefault();
       const post = {title,description,price,location}
      const results =await makePost(post,token)
      if (results.success) {
        getPosts();
        navigate('/posts')
      }
    //console.log(post)
    
    }console.log(willDeliver)
    return(<>
          <h1>New Post</h1>
        <form onSubmit={handleSubmit}>
          <TextField id="filled-basic"  variant="standard"
           type="text"
           placeholder='title'
           value={title}
           onChange={(event)=>{setTitle(event.target.value)}}
           />
        
          <TextField id="filled-basic"  variant="standard"
           type="text"
           placeholder='description'
           value={description}
           onChange={(event)=>{setDescription(event.target.value)}}
           />
        
          <TextField id="filled-basic"  variant="standard"
           type="text"
           placeholder='price'
           value={price}
           onChange={(event)=>{setPrice(event.target.value)}}
           />
           <TextField id="filled-basic"  variant="standard"
           type="text"
           placeholder='location'
           value={location}
           onChange={(event)=>{setLocation(event.target.value)}}
           />
          <Checkbox
              label= 'Deliver'
              checked={willDeliver}
              onChange={() => setWillDeliver(!willDeliver)}
            /><>Available for Delivery     </>
            <Button  type='submit' variant='contained'size='small'>Save Changes</Button>
        </form>
   </> )
}