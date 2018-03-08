import React from 'react';
import { Router, Route, Link } from 'react-router';
import styles from './styles.scss';

function ProjectDetail(props) {
  let validation = true;

  let content = (
    <div className={ styles.projectDetail__content } >
      <img src={ props.img_url } style={{ width: 800, height: 600, marginTop: 400 }} />
      <Link to={props.backLink} className={styles.projectDetail__backLink}><h3 className="fas fa-times"></h3></Link>
      <h1>{ props.name }</h1>
      <p>{ props.description }</p>
      <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
    </div>
  )

  if(props.git_url && props.git_url != 'false'){
    content = (
      <div className={ styles.projectDetail__content } >
        <img src={ props.img_url } style={{ width: 800, height: 600, marginTop: 400 }} />
        <Link to={props.backLink} className={styles.projectDetail__backLink}><h3 className="fas fa-times"></h3></Link>
        <h1>{ props.name }</h1>
        <p>{ props.description }</p>
        <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
        <a target="_blank" href={ props.git_url }><button>GITHUB</button></a>
      </div>
    )
  }

  for (let prop in props){
    if(!props[prop]){
      content = (<div className={ styles.projectDetail__content } >
        <h1>oops</h1>
        <Link to={props.backLink} className={styles.projectDetail__backLink}>
          <h3 className="fas fa-times"></h3>
        </Link>
        </div>)
      break;
    }
  }

  return (
    <div className={ styles.projectDetail } >
      { content }
      <div className={ styles.projectDetail__backdrop } ></div>
    </div>
  )
}

export default ProjectDetail;
