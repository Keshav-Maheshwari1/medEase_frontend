import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
export const Shorts = () => {
  return (
        <div>
                <h1>Shorts Page</h1>
                <Link className='nav-group-logo' tag='a' to='/'><img src={logo} className='nav-website-logo' alt='logo'/></Link>
        </div>
  )
}
