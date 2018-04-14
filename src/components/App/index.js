import React from 'react';
import styles from './styles.scss';
import Home from '../Home';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ProjectsContainer from '../../redux/containers/ProjectsContainer';
import { Router, Route, Link } from 'react-router';

function App({ children }) {
  let nav = '';
  if(children.props.router.location.pathname != '/'){
    nav = <Navbar></Navbar>
  }

  let footer = '';
  if(children.props.router.location.pathname != '/about'){
    footer = <Footer className={ styles.footer }></Footer>
  }

  return (
    <div className={ styles.app }>
      { nav }
      { children }
      { footer }
    </div>
  );
}

export default App;
