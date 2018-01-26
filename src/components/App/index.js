import React, { PropTypes } from 'react';
import styles from './styles.scss';
import Home from '../Home';
import ProjectsContainer from '../../redux/containers/ProjectsContainer';
import { Router, Route, Link } from 'react-router';

function App({ children }) {
  return (
    <div>
      <Link to="/projects"><h1>Imanis Projecten :)</h1></Link>
      <h3>Kijk het is leuk!</h3>
        <div>{ children }</div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
