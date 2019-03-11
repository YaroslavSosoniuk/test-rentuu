import React from 'react';
import UserForm from '../UserFormEditable/UserFormEditable';
import {Link} from 'react-router-dom';
import './style.css';

export default ( { name, lastName, ipAddress,email, gender, country, match, id, onChange  } ) => {

    return (
        <div className={'user_card'}>
            <UserForm name={ name } lastName = { lastName } id={ id } onChange={ onChange }/>
            <p> { ipAddress } </p>
            {email && <p> { email } </p> }
            {gender && <p> { gender } </p>}
            {country && <p> { country } </p>}
            {!email && !gender && !country && <Link to={`${match.url}user/${id}`}>go to info</Link> }
        </div>
    )

}