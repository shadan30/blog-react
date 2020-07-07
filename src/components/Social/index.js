import React from 'react'
import './style.css'

const Social = (props) => {
  return(
    <div>
     <a href="https://www.facebook.com/shadan.ali.77" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/icons/fb.png')} alt="fb"/></a>
     <a href="https://www.instagram.com/shadanali30/" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/icons/insta.png')} alt="insta"/></a>
     <a href="https://github.com/shadan30" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/icons/git.png')} alt="github"/></a>
     <a href="https://www.linkedin.com/in/shadan-ali-0a156513b/" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/icons/linked.png')} alt="linkdin"/></a>
    </div>
   )

 }

export default Social