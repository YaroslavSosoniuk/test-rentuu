import * as types from './types';

export function getUsersData() {
    return function(dispatch) {
        return fetch("https://raw.githubusercontent.com/ytkonaft/test_json/master/test.json")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: types.USERS_LOADED, payload: json });
            });
    };
}
export function changeUserDataFromList ( { id, name, lastName } ) {
    return {
        type: types.CHANGE_USER_DATA_FROM_LIST,
        payload : {
            id,
            name,
            lastName
        }
    }
}

export function getNextUsers ( { step } ){
    return {
        type: types.GET_NEXT_USERS,
        payload : {
            step
        }
    }
}
export function getPrevUsers ( { step } ){
    return {
        type:types.GET_PREVIOUS_USERS,
        payload: {
            step
        }
    }
}
export function filterUsers( { filter } ){
    return {
        type:types.FILTER_USERS,
        payload: {
            filter
        }
    }
}
