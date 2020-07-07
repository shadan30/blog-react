import React,{useState} from 'react'
import './style.css'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
   const[search,setSearch]=useState(false);    //HOOKS

   const submit=(e)=>{
      e.preventDefault();
      alert('Searched');
   }

   const openSearch=()=>{
       setSearch(true);
   }

   const closeSearch=()=>{
       setSearch(false);
   }

   const searchClass= (search===true)? 'searchinput-active':'searchinput';
   const path="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-32.png";

  return(
    <div className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/aboutus">About Us</Link></li>
      <li><Link to="/posts">Posts</Link></li>
      <li><Link to="/contactus">Contact Us</Link></li>
    </ul>
     <div className="search">
     <form onSubmit={submit}  onMouseLeave={closeSearch}>
      <input className={searchClass} type="text" placeholder="search"/>
      <img  onMouseEnter={openSearch} className="searchicon" src={path} alt="Search"/>
      </form>
     </div>
    </div>
   )
 }

export default Navbar