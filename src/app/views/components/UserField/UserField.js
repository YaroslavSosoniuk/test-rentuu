import React from 'react';
import './style.css';
export default ( { name, lastName, onDblClick } ) => {

    let userFieldContent = name !== undefined ? name : lastName;
    return (
        <p
            className='user_field_editable'
            onDoubleClick={onDblClick}
        >
            { userFieldContent }
        </p>
    )

}
