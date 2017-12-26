import React from 'react';
import styles from './styles.scss';
import Link from 'react-router/lib/Link'; //alternative to <a> tag

function HomeNav() {
  return (
    <ul>
      <li>
          <Link to="/projects">Projects</Link>
      </li>
      <li>
          <Link to="/#">About</Link>
      </li>
    </ul>
  );
}

export default HomeNav;
