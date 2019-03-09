import React from 'react';
import './style.css';

export default ( { onclick , type } ) => {

    let text = type === 'forward' ? 'forward' : 'previous';
    return (
        <button onClick={ onclick } className={`users_pagination_button`}>
            { text }
        </button>
    )

}