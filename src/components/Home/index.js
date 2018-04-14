import React from 'react';
import styles from './styles.scss';
import Link from 'react-router/lib/Link';
import Cube from '../Cube';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {left: false, right: false};
  }

  render(){
    return (
      <ul className={ styles.homeNav }>
        <li className={ styles.homeNav__item_left }
            onMouseEnter={() => this.setState({left: true, right: false})}
            onMouseLeave={() => {this.setState({left: false, right: false})}}
            >
          <Link to="/about">
              <h1>About</h1>
          </Link>
        </li>
        <li className={ styles.homeNav__cube }
            onMouseEnter={() => this.setState({left: false, right: false})}
            >
          <Cube z={-3} left={this.state.left} right={this.state.right} ></Cube>
        </li>
        <li className={ styles.homeNav__item_right }
            onMouseEnter={() => this.setState({left: false, right: true})}
            onMouseLeave={() => this.setState({left: false, right: false})}
            >
            <Link to="/projects">
               <h1>Projects</h1>
            </Link>
        </li>
      </ul>
    );
  }
}

export default Home;
