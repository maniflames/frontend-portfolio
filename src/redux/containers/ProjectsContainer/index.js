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

    detailRenderHandler(){
      //project props knows the id given to router
      console.log(this.props, 'project props');


      if(this.props.params.id && this.props.projects.data.items){
        //get an array of just the project id's
        let projectIds = this.props.projects.data.items.map((project) => {
          return project._id;
        })

        //check if id is in current projects items
        if(projectIds.indexOf(this.props.params.id) === -1){
          //if not fetch the project from the API

        } else {
           //check if all the content is loaded of just a part of it
          let selectedProject = this.props.projects.data.items.filter((project) => {
            return project._id = this.props.params.id;
          })[0]

          if(!selectedProject.content){
            //fetch the project
          }
        }
      }


      return this.props.children;
    }

    render() {
        let fetched = this.props.projects.fetched;
        let error = this.props.projects.error;
        let projects = this.props.projects.data.items;
        let pagination = this.props.projects.data.pagination;

        return (
            <div>
                <h1>Alle projecten</h1>
                { this.detailRenderHandler() }
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
