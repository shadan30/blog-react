import React,{useState,useEffect} from 'react'  //useEffect will be called after every render()
import './style.css'
import Card from '../UI/Card'
import blogPost from '../../data/blog.json'   //import json file having each blog's details 

const Blogpost = (props) => {
  
  const[post,setPost]=useState({      //HOOKS
            id:"",
            blogCategory:"",
            blogTitle :"",
            slug:"",
            postedOn:"",
            author:"",
            blogImage:"",
            blogText:""
  });  

  const[pid,setPid]=useState("");  //HOOKS to check is post id in url has changed

  console.log(props);   //To check if postid is coming from posts->index.js
  useEffect(()=>{
    const postId=props.match.params.postid;    //extract the postid from "Posts-> index.js" in which it is given in "App.js" 
    console.log(blogPost);         //To check is json file is receiving
    const post = blogPost.data.find(post => post.id===postId)
    setPost(post)
    setPid(pid);
  },[post,props.match.params.postid]);  // eslint-disable-line react-hooks/exhaustive-deps
  
  if(post.blogImage ==="") return null;  // in const[post,setPost]=useState  initially blogImage is empty we make it NULL, because it was not working

  return(
    <Card style={{borderRadius:"20px", width:"70%"}}>
      <div className="blogheader">
       <span className="blogcategory">{post.blogCategory}</span>
       <h1 className="posttitle">{post.blogTitle}</h1>
       <span className="postedby">{post.postedOn} by {post.author}</span>
      </div>
      <div className="postimagecontainer">
      <img src={require(`../../blogPostImages/${post.blogImage}`)} alt="Post"/>
      </div>
      <div className="postcontent">
      <h3>{post.blogTitle}</h3>
      <p>{post.blogText}</p>
      </div>
    </Card>
   )

 }

export default Blogpost