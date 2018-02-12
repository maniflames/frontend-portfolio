import React from 'react';
import { connect } from 'react-redux';
import { fetchList, remove, add } from '../../actions/projectActions';
import Project from '../../../components/Project';
import ProjectList from '../../../components/ProjectList';
import Pagination from '../../../components/Pagination';
import styles from './styles.scss';

//temporary
import Lol from '../../../components/Lol';

@connect((store) => {
    return store
})

class ProjectsContainer extends React.Component {
    projects = [];

    componentDidMount() {
        this.props.dispatch(fetchList('http://api.imanidap.nl/projects?limit=5/'));
    }

    addClickHandler(url, project) {
      this.props.dispatch(add(url, project));
    }

    removeClickHandler(url, id) {
      this.props.dispatch(remove(url, id));
    }

    render() {
        let fetched = this.props.projects.fetched;
        let error = this.props.projects.error;
        let projects = this.props.projects.data.items;
        let pagination = this.props.projects.data.pagination;
        console.log('rendering projects');

        return (
            <div>
                <h1>Alle projecten</h1>
                { this.props.children }
                 <ProjectList
                     baseUrl="http://api.imanidap.nl/projects/"
                     fetched={ fetched }
                     error={ error }
                     projects={ projects }
                     add={(url, project) => { this.addClickHandler(url, project) }}
                     remove={(url, id) => { this.removeClickHandler(url, id) }}
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
