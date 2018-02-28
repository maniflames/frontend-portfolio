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
        this.props.dispatch(fetchList('http://api.imanidap.nl/projects?limit=5/'));
        //if it has children do the children handler
    }

    addClickHandler(url, project) {
      this.props.dispatch(add(url, project));
    }

    removeClickHandler(url, id) {
      this.props.dispatch(remove(url, id));
    }

    render() {
      //fix below by looking into connect a little bit deeper
        let fetched = this.props.projects.fetched;
        let error = this.props.projects.error;
        let projects = this.props.projects.data.items;
        let pagination = this.props.projects.data.pagination;

        let children = <span></span>;
        let properties = {
          img_url: 'http://static.webshopapp.com/shops/207614/files/139724915/image.jpg',
          name: 'Test Project',
          description: 'This project is closer to the end result',
          content: 'I\'m using React.cloneElement to work things out',
          git_url: '',
        }

        if(this.props.children){
          children = React.cloneElement(this.props.children, properties);
        }

        return (
            <div>
                <h1>Alle projecten</h1>
                <Link to="/projects/lolololol">HIEROOO</Link>

                { children }

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
