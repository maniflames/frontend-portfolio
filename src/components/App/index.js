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
  
  return (
    <div className={ styles.app }>
      { nav }
      { children }
      <Footer className={ styles.footer }></Footer>
    </div>
  );
}

export default App;
