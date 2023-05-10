import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Header</Link></li>
        <li><Link to="/AboutMe">AboutMe</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/SocialMedia">SocialMedia</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
