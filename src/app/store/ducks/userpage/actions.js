export * as types from './types';

export const getUserData = ( { id } ) => ({
    type: types.GET_USER_DATA,
    payload : {
        id
    }
});

export const changeUserData = ({ id, name, lastName }) => ( {
    type: types.CHANGE_USER_DATA,
    paylaod: {
        id,
        name,
        lastName
    }
});