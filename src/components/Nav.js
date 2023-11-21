import React, { useState } from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Nav() {
  const dispatch = useDispatch();
    const login = useSelector((state) => state.user);

    const handleLogout = () => {
      dispatch({ type: "setMemberLogout", payload: null });
      console.log(login);
    };
  return (
    <nav className='nav'>
      <Link to='/'className='nav__logo'>Shop</Link>
      <div className='nav__icons'>
        <Link to='shoppingcart' className='nav__shoppingCart'>cart</Link>
        <div className='nav__avatar'>profile</div>
        {login !== null ? <Link to='/' className='nav__login' onClick={handleLogout}>logout</Link> : <Link to='/login' className='nav__login'>login</Link>}
      </div>
    </nav>
  )
}
