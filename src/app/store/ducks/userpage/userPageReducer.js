import * as types from './types';

const initialState = {
    userInfo : {}
};


const userPageReducer = ( state = initialState, { type, payload }) => {

    switch ( type ) {

        case types.GET_USER_DATA :
            return ({
                ...state,
                userInfo: state.loadedUsers.slice( state.loadedUsers.map( user  => user.id ).indexOf(payload.id) , 1)
            })

        case types.CHANGE_USER_DATA :
            return ({
                ...state,
                userInfo: state.userInfo.map( ({id,name,lastName, ...rest})=>({
                    id:payload.id,
                    name:payload.name,
                    lastName:payload.lastName,
                    ...rest
                }) )
            })

    }
    return state

};
export {userPageReducer};