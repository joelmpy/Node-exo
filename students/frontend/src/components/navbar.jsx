import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul className='nav-Links'>
        <Link to="/">Home</Link>
        <Link to="/Add">Add</Link>
        </ul>
    </div>
  )
}

export default Navbar