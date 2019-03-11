import * as types from './types';
import { mapJsonUsersDataAll } from "../usersPage/utils";

const initialState = {
    userInfo : {}
};


const userPageReducer = ( state = initialState, { type, payload }) => {

    switch ( type ) {

        case types.USER_LOADED :
            console.log(payload);
            return {
                ...state,
                userInfo: payload.users.filter( user => user.id === payload.id ).map( mapJsonUsersDataAll )
            }

        case types.CHANGE_USER_DATA :

            return {
                ...state,
                userInfo: state.userInfo.map( ({id,name,lastName, ...rest})=>({
                                                                                id,
                                                                                name:payload.name,
                                                                                lastName:payload.lastName,
                                                                                    ...rest
                                                                                })
                )
            }

    }
    return state

};
export default userPageReducer;