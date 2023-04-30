import React,{useState} from "react";
import  { Typography,Button,TextField} from '@mui/material';

export default function Message() {
       const [message, setMessage] = useState();

    return(
        <form >
        <TextField id="filled-basic"  variant="standard"
         type="text"
         placeholder='Message'
         value={message}
         onChange={(event)=>{setMess(event.target.value)}}
         />
         </form>)
};