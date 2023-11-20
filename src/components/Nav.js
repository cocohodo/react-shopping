import React, { useState } from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom';

export default function Nav() {
    const [login, setLogin] = useState({});
  return (
    <nav className='nav'>
      <Link to='/'className='nav__logo'>Shop</Link>
      <div className='nav__icons'>
        <div className='nav__shoppingCart'>cart</div>
        <div className='nav__avatar'>profile</div>
        {login ? <div className='nav__login'>logout</div> : <div className='nav__login'>login</div>}
      </div>
    </nav>
  )
}
