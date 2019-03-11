import * as types from './types';
export function getUserData( id ) {
    return function(dispatch) {
        return fetch("https://raw.githubusercontent.com/ytkonaft/test_json/master/test.json")
            .then(response => response.json())
            .then(users => {
                dispatch({ type: types.USER_LOADED, payload: { users: users , id : id}})
            });
    };
}

export const changeUserData = ( {id, name, lastName }) => ( {
    type: types.CHANGE_USER_DATA,
    payload: {
        id,
        name,
        lastName
    }
});