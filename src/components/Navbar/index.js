import React from 'react';
import { Link } from 'react-router';
import styles from './styles.scss';
import Cube from '../Cube';

function Navbar(){
  return (
    <ul className={ styles.navbar }>
      <li className={ styles.navbar__items }><Link to="/"><div className={styles.navbar__cube}></div></Link></li>
      <li className={ styles.navbar__items }><Link to="/about">About</Link></li>
      <li className={ styles.navbar__items }><Link to="/projects">Projects</Link></li>
    </ul>
  )
}

export default Navbar;
