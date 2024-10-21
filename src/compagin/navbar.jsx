import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
     <Link to={'/login'}> <p>Login</p></Link>
        <Link to={'/lesson'}><h1>Lesson</h1></Link> 
        <Link to={"/"}>   <p>Home</p></Link>
        <Link to={"/homework"}>   <p>Homework</p></Link>
        <Link to={'/teacher'}>    <p>Teacher</p></Link>
        <Link to={'/student'}>    <p>Student</p></Link>
        <Link to={'/unversity'}>    <p>Unvarsity</p></Link>
        <Link to={'/language'}>    <p>Language</p></Link>
    </div>
  )
}

export default Navbar