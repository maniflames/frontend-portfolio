import React from 'react';
import styles from './styles.scss';

function Project(props) {
    const imgStyle = {
        backgroundImage: `url(${props.data.img_url})`,
        backgroundSize: 'cover',
        width: 500,
        height: 500,
    }

    return(
            <div style={ imgStyle } >
                <h1>{ props.data.name }</h1>
            </div>
    )
}

export default Project;
