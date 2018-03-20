import React from 'react';
import styles from './styles.scss';
import Link from 'react-router/lib/Link';
import Cube from '../Cube';

function HomeNav() {
  return (
    <ul className={ styles.homeNav }>
      <li className={ styles.homeNav__item }>
        <Link to="/about">
            <Cube text="About" z={-6}></Cube>
        </Link>
      </li>
      <li className={ styles.homeNav__item } >
          <Link to="/projects">
             <Cube text="Projects" z={-6}></Cube>
          </Link>
      </li>
    </ul>
  );
}

export default HomeNav;
