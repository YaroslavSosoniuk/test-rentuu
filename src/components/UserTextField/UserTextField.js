import React from 'react';

export default ( { name, lastName, onChange } ) => {

    let userFieldContent = name !== undefined ? name : lastName;
    return (
        <input
            type='text'
            value={ userFieldContent }
            onChange={ (e) => onChange(e) }
        />
    )

}