import React from 'react';

function ProjectDetailEditForm(props){
    const prefill = props.prefill;
    const changeHandler = props.changeHandler;

    return (
        <form>
           <input type="text" defaultValue={ prefill.img_url } name="img_url" onChange={ props.changeHandler }/>
           <input type="text" defaultValue={ prefill.name } name="name"/>
           <textarea name="description" defaultValue={ prefill.description }></textarea>
           <textarea name="content" defaultValue={ prefill.content }></textarea>
           <input type="text" defaultValue={ prefill.git_url } name="git_url"/>
        </form>
    )
}

export default ProjectDetailEditForm;
