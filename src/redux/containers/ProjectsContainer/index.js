import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import { fetchList, remove, add } from '../../actions/projectActions';
import Project from '../../../components/Project';
import ProjectList from '../../../components/ProjectList';
import Pagination from '../../../components/Pagination';
import styles from './styles.scss';

@connect((store) => {
    return store
})

class ProjectsContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchList('https://api.imanidap.nl/projects/'));
    }

    render() {
      //fix below by looking into connect a little bit deeper
        let fetched = this.props.projects.fetched;
        let error = this.props.projects.error;
        let projects = this.props.projects.data.items;
        let pagination = this.props.projects.data.pagination;
        let projectList = <div></div>;
        if( !this.props.params.id ){
          projectList = <ProjectList baseUrl="https://api.imanidap.nl/projects/" fetched={ fetched } error={ error } projects={ projects }></ProjectList>
        }

        return (
            <div className={styles.projectsContainer}>
                <h1>My Work</h1>
                { this.props.children }
                { projectList }
            </div>
        )
    }
}


export default ProjectsContainer;
