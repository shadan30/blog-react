import React from 'react'
import './style.css'
import Blogpost from '../../components/Blogpost'
import Sidebar from '../../components/Sidebar'

const Posts = (props) => {
  console.log(props);  //to check is postid is in console type in address "../posts/1" then(inspectelement -> debug ->{history....} ->match->params->(postid:1))
  return(
    <section className="container">
    <Blogpost {...props}/>
    <Sidebar />
    </section>
   )

 }

export default Posts