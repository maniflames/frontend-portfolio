import React from 'react';
import { connect } from 'react-redux';
import { fetchList, edit } from '../../actions/projectActions';

import ProjectDetailForm from '../../../components/ProjectDetailForm';

@connect((store) => {
    return store
})

class ProjectDetailEditContainer extends React.Component {
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

    //TODO: Change this so it uses refs instead of hack
    formSubmitHandler(e) {
        e.preventDefault();

        const target = e.target;
        let project = {};

        target.childNodes.forEach((element) => {
            if(element.name === 'submit'){
              return;
            }
            project[element.name] = element.value;
        })

       this.props.dispatch(edit('http://api.imanidap.nl/projects/' + this.props.params.id, project));
    }

    render() {

        if(this.props.projects.fetched && this.projectDetail){
          const project = this.props.projects.data.items.filter((project) => {
            return project._id == this.props.params.id;
          })[0];

          return(
              <div>
                  <ProjectDetailForm
                      prefill={ this.projectDetail }
                      submitHandler={ (e) => { this.formSubmitHandler(e) }}
                  >
                  </ProjectDetailForm>
              </div>
          )
        } else {
          return(
            <div>Loading ...</div>
          )
        }

    }
}

export default ProjectDetailEditContainer;
