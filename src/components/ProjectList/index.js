import React from 'react';
import Project from '../Project';
import styles from './styles.scss';

//TODO: refactor if statements (best is probably polymorphism just like refactoring switch statements)
//I do wonder if the polymorphism solution isnt a bit too OOP for this case => did a quick googlesearch found lambda

function ProjectList(props) {
    const fetched = props.fetched;
    const error = props.error;

    if(!fetched) {
        return <h3>Loading .....</h3>
    }

    if(fetched && !error) {
        const projectsHtml = props.projects.map((project) => {
            return <li key={ project._id }><Project data={ project }></Project></li>
        })

        return <ul>{ projectsHtml }</ul>
    }

    if(fetched && error){
        return <h3>Oops</h3>
    }
}

export default ProjectList;
