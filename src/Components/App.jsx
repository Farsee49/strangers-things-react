import React, { useState } from "react";
import {fetchPosts } from '../data-requests'
import Form from "./Form";
import NewPost from "./Posts";

export default function App() {
    const[posts, setPosts] = useState([]);
    async function getPosts() {
      const result= await fetchPosts()
      if (result.success) {
        setPosts(result.data.posts)
      }
    
      }
    return(<>
        <h1>Otters Frolicing</h1>
        <button onClick={getPosts}>CLICK</button>
        <Form />
        <NewPost />
       {
          posts.map(function(post){
            return(
                <div key ={post._Id}>{post.title}</div> 
            )
          })   }</>
    )
  
}