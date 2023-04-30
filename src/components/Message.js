import React,{useState} from "react";
import { Link, useParams} from 'react-router-dom';
import  { Typography,Button,TextField} from '@mui/material';
import {postMessage} from '../data-requests'

export default function Message({posts,token,navigate,getPosts}) {
       const [content, setContent] = useState('');
       const { postId } = useParams();
       const handleSubmit =  async (event)=>{
        
        const message = {content};
        event.preventDefault();
        console.log(9900)
        try {
            const result = await postMessage(postId, token,message);
            if (result.success) {
              getPosts();
              navigate('/posts')
            } else {
              console.log(result.error);
            }
          } catch (err) {
            console.error(err);
          }
       
       }

       console.log()
    return(
        <form onSubmit={handleSubmit}>
        <TextField id="filled-basic"  variant="standard"
         type="text"
         placeholder='Message'
         value={content}
         onChange={(event)=>{setContent(event.target.value)}}
         />
         <Button  type='submit' variant='contained'size='small'>Send</Button>
         </form>)
};