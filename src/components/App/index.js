import React, { PropTypes } from 'react';
import styles from './styles.scss';
import Home from '../Home';


function App({ children }) {
  return (
    <div>
        <div>{ children }</div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
