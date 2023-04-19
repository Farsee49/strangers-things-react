import React, {useState, useEffect} from "react";
import { ReactDOM } from "react";

const COHORT_NAME = '2301-ftb-et-web-pt';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


export default function App() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch('https://jsonplace-univclone.herokuapp.com/posts');
            const data = await resp.json();
            console.log('resp:',data)
            setPosts(data)
        }
       fetchPosts();
    },[])
    


return(<>
    <h1>Otters Frolicing</h1>
    <div> posts:{
        posts.map(function(post) {
            return <><div key={post.id}>{post.title}</div>
            <button>SUP</button><button>SUP</button></>
        })
    }</div>

   </>)
}