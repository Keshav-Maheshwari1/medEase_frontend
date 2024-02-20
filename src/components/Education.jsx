import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
export const Education = () => {
  return (
    <div>
      <h1> This is Education Page</h1>
      <Link className='nav-group-logo' tag='a' to='/'><img src={logo} className='nav-website-logo' alt='logo'/></Link>
    </div>
  )
}
