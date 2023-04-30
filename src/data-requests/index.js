import React from "react";
import { useNavigate } from "react-router-dom";

const COHORT_NAME = '2301-ftb-et-web-pt'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;



export const registerUser = async (user) => {
    console.log(user)
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user
        })
      });
      const result = await response.json()
      console.log(result)
      return result
    } catch (err) {
      console.error(err);
    }
  };
  
  export const login = async (user) => {
   // console.log(user)

    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         user
        })
      });
      const result = await response.json();
      //console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  };

  export const myData = async (token) => {
  // console.log(token)
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      //console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  };






  export const fetchPosts = async (token) => {

    //console.log(9900)
    try {
      const response = await fetch(`${BASE_URL}/posts`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  };

  export const makePost = async (post, token) => {
    //console.log(posts,token)

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  };

  export const deletePost = async (postId,token) => {
    console.log(token)
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
    // getPosts();
    // navigate('/posts')
  };
  export const updatePost = async (postId, token, updatedPost) => {

    try {
      // You will need to insert a variable into the fetch template literal
      // in order to make the POST_ID dynamic.
      // 5e8d1bd48829fb0017d2233b is just for demonstration.
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: updatedPost,
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  const postMessage = async () => {
    try {
      const response = await fetch(`${BASE_URL}/${postId}/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        body: JSON.stringify({
          message: {
            content: "Do you still have this?  Would you take $10 less?"
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  
  
