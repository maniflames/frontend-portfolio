import React, { PropTypes } from 'react';
import styles from './styles.scss';
import Home from '../Home';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ProjectsContainer from '../../redux/containers/ProjectsContainer';
import { Router, Route, Link } from 'react-router';

function App({ children }) {
  return (
    <div>
        <Navbar></Navbar> 
        <div>{ children }</div>
        <Footer></Footer>
    </div>
  );
}

export default App;
