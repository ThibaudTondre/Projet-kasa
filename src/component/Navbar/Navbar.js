import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

function Navbar ()  {
return( 
  <nav className='Navbar' >
      <div className='navbar_logo'>
        <img src='logo.png' alt='Logo' />  
      </div>
      <div>Accueil</div>
      <div>A propos</div>
  </nav>
);
}

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
