import React from 'react'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <>
    <ul class='Nevbar'>
        <li>
            
        <Link to="/">Home</Link>
        </li>
        <li>

        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>

        </li>
    </ul>
    
    </>
  )
}

export default navbar