import React from 'react';
import { connect } from 'react-redux';
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
        this.props.dispatch(fetchList('http://api.imanidap.nl/projects?limit=5'));
    }

    addClickHandler(url, project) {
      this.props.dispatch(add(url, project));
    }

    removeClickHandler(url) {
      this.props.dispatch(remove(url));
    }

    render() {
        const fetched = this.props.projects.fetched;
        const error = this.props.projects.error;
        const projects = this.props.projects.data.items;
        const pagination = this.props.projects.data.pagination;

        return (
            <div>
                <h1>Projects</h1>
                 <ProjectList
                     baseUrl="http://api.imanidap.nl/projects/"
                     fetched={ fetched }
                     error={ error }
                     projects={ projects }
                     add={(url, project) => { this.addClickHandler(url, project) }}
                     remove={(url) => { this.removeClickHandler(url) }}
                 >
                 </ProjectList>
                 <Pagination
                     data={ pagination }
                     get={(url) => { this.props.dispatch(fetchList(url)) }}
                 >
                </Pagination>
            </div>
        )
    }
}


export default ProjectsContainer;