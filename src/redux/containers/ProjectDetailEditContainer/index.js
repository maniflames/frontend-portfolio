import React from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../../actions/projectActions';
import { formChange } from '../../actions/projectFormActions';
import ProjectDetailEditForm from '../../../components/ProjectDetailEditForm';

@connect((store) => {
    return store
})

class ProjectDetailContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchList('http://api.imanidap.nl/projects/' + this.props.params.id ))
    }

    formChangeHandler(e) {
        const target = e.target;
        let field = {};
        field[e.target.name] = e.target.value;
        this.props.dispatch(formChange(this.props.params.id, field));
        console.log(target);
        //TODO: refactor into submit state handler for action 

        //field name, rest operator this.props.projects.data
        //Change form state (I'm thinking about how I think I might have to bow down to local state)
    }

    render() {
        const project = this.props.projects.data;

        return(
            <div>
                <ProjectDetailEditForm
                    prefill={ project }
                    changeHandler={ (e) => { this.formChangeHandler(e) }}
                >
                </ProjectDetailEditForm>
            </div>
        )
    }
}

export default ProjectDetailContainer;
