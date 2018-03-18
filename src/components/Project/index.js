import React from 'react';
import styles from './styles.scss';
import { Router, Route, Link } from 'react-router';

function Project(props) {
    const imgStyle = {
        backgroundImage: `url(${props.data.img_url})`,
    }

    const url = '/projects/' + props.data._id;

    return(
      <Link to={ url } >
        <div className={ styles.project }>
          <div className={ styles.project__img } style={{ backgroundImage: `url(${props.data.img_url})` }} ></div>
          <div className={ styles.project__description }>
            <h3>{ props.data.name }</h3>
            <p>{ props.data.description }</p>
          </div>
        </div>
      </Link>
    )
}

export default Project;
