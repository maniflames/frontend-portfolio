import React from 'react';
import styles from './styles.scss';

function Project(props) {
    //TODO: move none varible styling to stylesheets
    const imgStyle = {
        backgroundImage: `url(${props.data.img_url})`,
        backgroundSize: 'cover',
        width: 500,
        height: 500,
    }

    const url = "/projects/" + props.data._id;

    return(
        <a href={ url } >
            <div style={ imgStyle } >
                <h1>{ props.data.name }</h1>
            </div>
        </a>
    )
}

export default Project;
