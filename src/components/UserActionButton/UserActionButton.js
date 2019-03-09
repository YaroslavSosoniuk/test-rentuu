import React from 'react';
import './style.css';

export default ( { onClick } ) => {

    return (
        <button
            type='button'
            onClick = { onClick }
            className={'user_button'}
        >
            Save
        </button>
    )

}