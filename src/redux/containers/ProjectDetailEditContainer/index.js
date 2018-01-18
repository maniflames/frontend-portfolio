import React from 'react';
import { connect } from 'react-redux';
import { fetchList, edit } from '../../actions/projectActions';

import ProjectDetailEditForm from '../../../components/ProjectDetailEditForm';

@connect((store) => {
    return store
})

class ProjectDetailContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchList('http://api.imanidap.nl/projects/' + this.props.params.id ))
    }

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
        const project = this.props.projects.data;

        return(
            <div>
                <ProjectDetailEditForm
                    prefill={ project }
                    submitHandler={ (e) => { this.formSubmitHandler(e) }}
                >
                </ProjectDetailEditForm>
            </div>
        )
    }
}

export default ProjectDetailContainer;
