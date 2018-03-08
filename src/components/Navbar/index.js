import React from 'react';
import { Link } from 'react-router';
import styles from './styles.scss';

function Navbar(){
  return (
    <ul className={ styles.navbar }>
      <li className={ styles.navbar__items }><Link to="/"><h1 className="fas fa-cube"></h1></Link></li>
      <li className={ styles.navbar__items }><Link to="/about">About</Link></li>
      <li className={ styles.navbar__items }><Link to="/projects">Projects</Link></li>
    </ul>
  )
}

export default Navbar;
