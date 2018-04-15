import React from 'react';
import Project from '../Project';
import styles from './styles.scss';

function ProjectList(props) {
    const fetched = props.fetched;
    const error = props.error;

    if(!fetched) {
        return <h3>Wait for it :P</h3>
    }

    if(fetched && !error) {
        const projectsHtml = props.projects.map((project, index) => {
          //Right now disabling remove & add until I add an authenication endpoint to the API
          //<div onClick={() => {props.remove(props.baseUrl + project._id, project._id)}}>Verwijderen</div>
            return (
              <li className={ styles.projects__project } key={ index }>
                <Project data={ project }></Project>
              </li>
            )
        })

        //<p onClick={() => {props.add(props.baseUrl, mockupProject)}}>Toevoegen</p>
        return (
          <div>
            <ul className={ styles.projects } onClick={ (e) => { if(e.target.classList){ window.scrollTo(0,0) } }}>{ projectsHtml }</ul>
          </div>
        )
    }

    if(fetched && error){
        return <h3>Oops</h3>
    }
}

export default ProjectList;
