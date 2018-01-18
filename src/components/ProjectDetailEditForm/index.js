import React from 'react';

function ProjectDetailEditForm(props){
    const prefill = props.prefill;
    const submitHandler = props.submitHandler;

    return (
        <form id="test" onSubmit={ submitHandler }>
           <input type="text" defaultValue={ prefill.img_url } name="img_url" />
           <input type="text" defaultValue={ prefill.name } name="name"/>
           <textarea name="description" defaultValue={ prefill.description }></textarea>
           <textarea name="content" defaultValue={ prefill.content }></textarea>
           <input type="text" defaultValue={ prefill.git_url } name="git_url"/>
           <input type="submit" name="submit" />
        </form>
    )
}

export default ProjectDetailEditForm;
