import React, {useState, useEffect} from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {Register,
        Login,
        EditPost,
        CreatePost,
        SinglePost,
        Message,
        Posts,
        Header} from "./";
import { fetchPosts, myData } from "../data-requests";



export default function App(){
    const [token, setToken] = useState('');
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();
// console.log(window.localStorage.getItem('token'));
   //const localToken = window.localStorage.getItem('token');
function tokenCheck(){
   if(window.localStorage.getItem('token')) {
    setToken(window.localStorage.getItem('token'));
   }
};

const getPosts = async () => {
    const results = await fetchPosts(token);
    if(results.success) {
        setPosts(results.data.posts);
    }   
};
const getData = async () => {
    const results =await myData(token);
    if(results.success) {
     setUser(results.data)
    }
};
useEffect(()=>{
    tokenCheck();

},[]);

useEffect(()=>{
    getPosts();
    if(token) {
        getData();
        setIsLoggedIn(true)
    };
    
},[token]);
// if (setIsLoggedIn){
//     console.log('logged in')
// }else{
//     console.log('logged out')
// }
// if (user._id){
//     console.log('logged in')   
// }else{}
if (isLoggedIn) {
    console.log('logged in')
}else{
    console.log('logged out')
}
// console.log(user)
// console.log(posts)
    return(
    <>
    {/* <Login /> */}
    <Header setToken={setToken} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} navigate={navigate}/>
    
     <Routes>
        <Route path='/single-post/:postId' 
         element={<SinglePost 
         token={token} setToken={setToken}
         posts={posts} getPosts={getPosts}/>}/>

        <Route path='/createpost' 
        element={<CreatePost
         token={token} setToken={setToken}
          posts={posts} getPosts={getPosts}navigate={navigate}/>}/>

        <Route path= '/login'
         element={<Login 
         setToken={setToken} navigate={navigate}/>} />

        <Route path= '/posts'
         element={<Posts
          posts={posts} getPosts={getPosts} token={token} navigate={navigate}/>}/>

        <Route path='/reg'
         element={<Register 
         setToken={setToken} navigate={navigate} />}/>

        <Route path='/edit-post/:postId'
         element={<EditPost 
         posts={posts} token={token} getPosts={getPosts}/>}/>
        
        <Route path='/message/:postId'
         element={<Message
         posts={posts} token={token} getPosts={getPosts} navigate={navigate}/>}/>

     </Routes>
     {/* <Posts posts={posts} setPosts={setPosts}/> */}
   </>
    )
};

