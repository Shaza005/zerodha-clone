import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">
      <img src="/media/images/logo.svg" alt="Logo" height="15" className="d-inline-block align-text-top m-3"/>
    </Link>
    
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active"  to="/register">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/support">Support</Link>
        </li>
        
      </ul>
    
  </div>
</nav>
     );
}

export default Navbar;