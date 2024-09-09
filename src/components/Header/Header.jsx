/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div className='header'> 
    <div className="logo">
       <img src={assets.logo} alt="" />
    </div>
    <div className='header-name'>TODO LIST</div>
    </div>

  )
}

export default Header