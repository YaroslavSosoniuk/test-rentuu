import React from 'react';

export default ( { onChange, filter } ) => {

    let counts = [5, 10, 'all']
    return (
        <select onChange={onChange} value={ filter } className={'select_field'}>
            {counts.map( (val, id ) => <option value={val} key={ id }>{ val }</option>)}
        </select>
    )

}