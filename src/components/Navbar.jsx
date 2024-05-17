import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/garage">Garage</Link></li>
      <li><Link to="/settings">Settings</Link></li>
    </ul>
  </nav>
);

export default Navbar;
