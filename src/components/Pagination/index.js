import React from 'react';
import styles from './styles.scss';

function Pagination(props) {
    return (
        <div>
            <button onClick={ () => { props.dispatch( props.data._links.previous.href )}} > &lt; </button>
             <button onClick={ () => { props.dispatch( props.data._links.next.href )}} > &gt; </button>
        </div>
    )
}

export default Pagination
