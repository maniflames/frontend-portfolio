import React from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../../actions/projectActions';
import { Router, Route, Link } from 'react-router';

@connect((store) => {
    return store
})

class ProjectDetailContainer extends React.Component {
  componentDidMount() {
      this.props.dispatch(fetchList('http://api.imanidap.nl/projects/'));
      this.projectDetail = false;
      this.detailRequest();
  }

  detailRequest(){
    const reqHeaders = new Headers();
    reqHeaders.append('Accept', 'application/json');

    const init = {
        method: 'GET',
        headers: reqHeaders,
        mode: 'cors',
    };

    fetch('http://api.imanidap.nl/projects/' + this.props.params.id, init)
    .then((res) => {
        return res.json()
    })
    .then((json) => {
      console.log(json);
      this.projectDetail = json;
    })
    .catch((err) => {
        console.log(err)
    })
  }

    render(){
        if(this.props.projects.fetched && this.projectDetail){

          this.project = this.props.projects.data.items.filter((project) => {
            return project._id == this.props.params.id;
          })[0];
          const url = this.props.params.id + '/edit';

          console.log(this.project);

          return(
              <div>
                  <img src={ this.project.img_url } witdh="500" height="500" />
                  <h1>{ this.projectDetail.name }</h1>
                  <p>in het kort: { this.projectDetail.description }</p>
                  <p>{ this.projectDetail.content }</p>
                  <a href={ this.projectDetail.git_url }><button>GITHUB</button></a>
                  <br/>
                  <a href={ url }>Bijwerken</a>
              </div>
          )
        } else {
          return(
            <p>Loading...</p>
          )
        }

    }
}

export default ProjectDetailContainer;
