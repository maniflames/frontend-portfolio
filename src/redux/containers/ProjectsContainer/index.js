import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import { fetchList, remove, add } from '../../actions/projectActions';
import Project from '../../../components/Project';
import ProjectList from '../../../components/ProjectList';
import Pagination from '../../../components/Pagination';
import styles from './styles.scss';

@connect((store) => {
  console.log(store); 
    return store
})

class ProjectsContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchList('http://api.imanidap.nl/projects?limit=5/'));
    }

    // addClickHandler(url, project) {
    //   this.props.dispatch(add(url, project));
    // }
    //
    // removeClickHandler(url, id) {
    //   this.props.dispatch(remove(url, id));
    // }

    render() {
      //fix below by looking into connect a little bit deeper
        let fetched = this.props.projects.fetched;
        let error = this.props.projects.error;
        let projects = this.props.projects.data.items;
        let pagination = this.props.projects.data.pagination;

        return (
            <div>
                <h1>My Projects</h1>
                { this.props.children }
                 <ProjectList
                     baseUrl="http://api.imanidap.nl/projects/"
                     fetched={ fetched }
                     error={ error }
                     projects={ projects }
                 >
                 </ProjectList>
            </div>
        )
    }
}


export default ProjectsContainer;
