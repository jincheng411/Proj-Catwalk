import React from 'react';
import './NavBar.css'

function NavBar() {
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
        <i class="fas fa-search"></i>
        <input placeholder="search"/>
      </div>
      <div>
        <i className="fas fa-shopping-bag"></i>
      </div>

    </div>
  )
}

export default NavBar;