import React from 'react';
import './NavBar.css'

function NavBar({cart}) {
  const count = cart.reduce((a, b) => {
    return a + b.quantity
  }, 0)
  return (
    <div className="navbar">
      <div>
        LOGO
      </div>
      <div>
        <span>men</span>
        <span>women</span>
        <span>kids</span>
        <span>customize</span>
        <span>sale</span>
      </div>
      <div>
        <i className="fas fa-search"></i>
        <input placeholder="search"/>
      </div>
      <div>
        {count > 0 && <span>{count}</span>}

        <i className="fas fa-shopping-bag"></i>
      </div>
    </div>
  )
}

export default NavBar;