import React from 'react';
import { connect } from 'react-redux';
import { fetchDetail } from '../../actions/projectActions';
import { Router, Route, Link } from 'react-router';
import ProjectDetail from '../../../components/ProjectDetail';

@connect((store) => {
    return store
})

class ProjectDetailContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDetail('https://api.imanidap.nl/projects/' + this.props.params.id));
  }

  render(){
    return(
      <ProjectDetail
        img_url={ this.props.projectDetail.data.img_url }
        name={  this.props.projectDetail.data.name }
        description={ this.props.projectDetail.data.description }
        content={ this.props.projectDetail.data.content }
        git_url={ this.props.projectDetail.data.git_url }
        backLink="/projects"
        ></ProjectDetail>
    )
  }
}

export default ProjectDetailContainer;
