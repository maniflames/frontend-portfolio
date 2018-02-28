import React from 'react';
import { Router, Route, Link } from 'react-router';
import styles from './styles.scss';

function ProjectDetail(props) {
  let validation = true;

  let content = (
    <div>
      <img src={ props.img_url } style={{ width: 800, height: 600 }} />
      <h1>{ props.name }</h1>
      <p>in het kort: { props.description }</p>
      <p>{ props.content }</p>
      <a href={ props.git_url }><button>GITHUB</button></a>
      <br/>
    </div>
  )

  for (let prop in props){
    if(!props[prop]){
      content = <h1>oops</h1>
      break;
    }
  }

  return (
    <div className={ styles.projectDetail } >
      <div className={ styles.projectDetail__content } >
        { content }
      </div>
      <div className={ styles.projectDetail__backdrop } ></div>
    </div>
  )
}

export default ProjectDetail;
