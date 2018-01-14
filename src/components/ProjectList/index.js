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
            return (
              <li key={ project._id }>
                <div onClick={() => {props.remove(props.baseUrl + project._id)}}>x</div>
                <Project data={ project }></Project>
              </li>
            )
        })

        const mockupProject = {
          "description": "lolol",
          "name": "mdsjdf",
          "img_url": "https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?auto=format&fit=crop&w=1951&q=80",
          "git_url": "lolololol",
          "content": "hihiihihh"
        }

        return (
          <div>
            <ul>{ projectsHtml }</ul>
            <h3 onClick={() => {props.add(props.baseUrl, mockupProject)}}>+</h3>
          </div>
        )
    }

    if(fetched && error){
        return <h3>Oops</h3>
    }
}

export default ProjectList;
