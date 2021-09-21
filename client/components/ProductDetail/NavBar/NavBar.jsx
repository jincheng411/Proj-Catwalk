import React from 'react';
import './NavBar.css'

function NavBar({itemCount}) {
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
        {itemCount > 0 && <span>{itemCount}</span>}

        <i className="fas fa-shopping-bag"></i>
      </div>
    </div>
  )
}

export default NavBar;