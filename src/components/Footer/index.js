import React from 'react';
import styles from './styles.scss';

function Footer(){
  return(
    <ul className={ styles.footer }>
      <li className={ styles.footer__social }>
        <a target="_blank" href="https://github.com/maniflames">
          <h1 className="fab fa-github"></h1>
        </a>
      </li>
      <li className={ styles.footer__social }>
        <a target="_blank" href="https://www.linkedin.com/in/imani-dap/">
          <h1 className="fab fa-linkedin"></h1>
        </a>
      </li>
    </ul>
  )
}

export default Footer;
