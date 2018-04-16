import React from 'react';
import DOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import styles from './styles.scss';

function ProjectDetail(props) {
  let validation = true;

  let content = (
    <div className={ styles.projectDetail__content } >
      <div className={ styles.projectDetail__img } style={{ backgroundImage: `url(${props.img_url})` }}>
        <Link to={props.backLink} className={styles.projectDetail__backLink}><h3 className="fa fa-times"></h3></Link>
      </div>
      <div className={ styles.projectDetail__text }>
        <h1>{ props.name }</h1>
        <p className={ styles.projectDetail__text_bold} >{ props.description }</p>
        <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
      </div>
    </div>
  )

  if(props.git_url && props.git_url != 'false'){
    content = (
      <div className={ styles.projectDetail__content } >
        <div className={ styles.projectDetail__img }  style={{ backgroundImage: `url(${props.img_url})` }} >
          <Link to={props.backLink} className={styles.projectDetail__backLink}><h3 className="fa fa-times"></h3></Link>
        </div>
        <div className={ styles.projectDetail__text }>
          <h1>{ props.name }</h1>
          <p className={ styles.projectDetail__text_bold } >{ props.description }</p>
          <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
          <a target="_blank" href={ props.git_url }><button>GITHUB</button></a>
        </div>
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
    <div className={ styles.projectDetail } id="project">
      { content }
    </div>
  )
}

export default ProjectDetail;
