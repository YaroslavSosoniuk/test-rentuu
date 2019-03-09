export function getData() {
    return function(dispatch) {
        return fetch("https://raw.githubusercontent.com/ytkonaft/test_json/master/test.json")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "DATA_LOADED", payload: json });
            });
    };
}
export function changeUserData ( payload ) {
    return { type: 'CHANGE_USER_DATA', payload}
}

export function getNextUsers (payload){
    return {type: 'GET_NEXT_USERS', payload}
}
export function getPrevUsers (payload){
    return {type:'GET_PREV_USERS', payload}
}
export function filterUsers(payload){
    return {type:'FILTER', payload}
}
export function getUserData(payload) {
    return {type:'GET_USER_DATA', payload}
}