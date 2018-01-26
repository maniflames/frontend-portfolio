import React from 'react';
import styles from './styles.scss';

function Pagination(props) {
  //TODO: Add first & last
  //TODO: Deactivate when already there (add last & first page props to read)
    return (
        <div>
            <button onClick={ () => { props.get( props.data._links.first.href )}} > first </button>
            <button onClick={ () => { props.get( props.data._links.previous.href )}} > &lt; </button>
            <button onClick={ () => { props.get( props.data._links.next.href )}} > &gt; </button>
            <button onClick={ () => { props.get( props.data._links.last.href )}} > last </button>
        </div>
    )
}

export default Pagination
