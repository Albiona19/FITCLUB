import React from 'react'
import './Header.css'
import Logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo' />

        <ul className='header-menu'>
          <li>Home</li>
          <li>Recipes</li>
          <li>Why Us</li>
          <li>Category</li>
          <li>Menu</li>
        </ul>
    </div>
  )
}

export default Header