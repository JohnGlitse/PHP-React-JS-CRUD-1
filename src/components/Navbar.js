import React from 'react'
import { Link } from 'react-router-dom'
import "../style/nav.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>Logo</div>
        <nav>
            <ul>
                <li><Link to="Home">Home</Link></li>
                <li><Link to="Create">Create</Link></li>
                <li><Link to="Update">Update</Link></li>
                <li><Link to="createcopy">createcopy</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar