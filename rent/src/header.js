// burger bar, logo, and "Add item for rent" 
// search bar that carries over to all pages except home.js
import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className=".col-5"> 
        <ul>
          <li>Home</li>
          <li>List Items</li>
          <li>Rent Items</li>
          <li>My Profile</li>
        </ul>
      </div>
    );
  }
}

export default Header;
