import React from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../../actions/projectActions';

@connect((store) => {
    return store
})

class ProjectDetailContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchList('http://api.imanidap.nl/projects/5a3411e572734dc7e6d24e53'))
    }

    render(){
        const project = this.props.projects.data;
        console.log(project);
        return(
            <div>
                <img src={ project.img_url } witdh="500" height="500" />
                <h1>{ project.name }</h1>
                <p>{ project.description }</p>
                <p>{ project.content }</p>
                <a href={ project.git_url }><button>GITHUB</button></a>
            </div>
        )
    }
}

export default ProjectDetailContainer;
