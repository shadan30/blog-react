import React,{useState,useEffect} from 'react'
import './style.css'
import Card from '../UI/Card'
import Social from '../Social'
import blogPost from '../../data/blog.json'
import {NavLink} from 'react-router-dom' 

const Sidebar = (props) => {

  const[posts,setPosts]=useState([]);  //HOOKS
  useEffect(()=>{     
    const posts = blogPost.data
    setPosts(posts)
  },[posts]);  

  return(
    <div className="sidebarcontainer">
    <Card style={{marginBottom: "15px" ,borderRadius:"20px" ,padding: "20px", boxsizing:"border-box"}}>
      <div className="cardheader">
      <span>About Us</span>
      </div>
      <div className="profileimagecontainer">
       <img src={require('../../blogPostImages/shadan.jpg')} alt="shadan"/>
      </div>
      <div className="cardbody">
        <p>Hi! My name is Shadan Ali, I am a graduate from Jaypee Institute Of Information Technology with B.Tech In Computer Science & Technology.....)</p>
      </div>
    </Card>

    <Card style={{marginBottom: "15px",borderRadius:"20px" ,padding: "20px", boxsizing:"border-box"}}>
      <div className="cardheader">
      <span className="social"><Social /></span>
      </div>
    </Card>

    <Card style={{marginBottom: "15px",borderRadius:"20px" ,padding: "20px", boxsizing:"border-box"}}>
      <div className="cardheader">
      <span>Recent Post</span>
      </div>
      <div className="recentposts">
      {
        posts.map(post =>{
          return(
          <NavLink key={post.id} to={`/posts/${post.id}`}>
            <div className="recentpost">
            <h3>{post.blogTitle}</h3>
            <span>{post.postedOn}</span>
            </div>
          </NavLink>
        )
        })
      }
      </div>
    </Card>
    </div>
   )

 }

export default Sidebar