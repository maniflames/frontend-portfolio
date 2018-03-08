import React from 'react';
import styles from './styles.scss';
import Link from 'react-router/lib/Link';

function HomeNav() {
  const imgStyleAbout = {
    backgroundImage: 'url(\'/images/duo_tone_about.jpg\')',
    backgroundSize: 'cover',
  }

  const imgStyleProjects = {
    backgroundImage: 'url(\'/images/duo_tone_projects.jpg\')',
    backgroundSize: 'cover',
  }

  return (
    <ul className={ styles.homeNav }>
      <li className={ styles.homeNav__item }>
        <Link to="/about">
            <div style={ imgStyleAbout }>
              <h1 className={ styles.homeNav__item_about }></h1>
            </div>
        </Link>
      </li>
      <li className={ styles.homeNav__item } >
          <Link to="/projects">
            <div style={ imgStyleProjects }>
              <h1 className={ styles.homeNav__item_projects }></h1>
            </div>
          </Link>
      </li>
    </ul>
  );
}

export default HomeNav;
