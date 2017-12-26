import React from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../../actions/projectActions';
import Project from '../../../components/Project';
import ProjectList from '../../../components/ProjectList';
import Pagination from '../../../components/Pagination';
import styles from './styles.scss';

@connect((store) => {
    return store
})

class Projects extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchList('http://api.imanidap.nl/projects?limit=5'));
    }

    render() {
        const fetched = this.props.projects.fetched;
        const error = this.props.projects.error;
        const projects = this.props.projects.data.items;
        const pagination = this.props.projects.data.pagination;

        return (
            <div>
                <h1>Projects</h1>
                 <ProjectList fetched={ fetched } error={ error } projects={ projects }></ProjectList>
                 <Pagination data={ pagination } dispatch={(url) => { this.props.dispatch(fetchList(url)) }}></Pagination>
            </div>
        )
    }
}

export default Projects;
