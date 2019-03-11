import * as types from './types';
import * as utils from './utils';

const initialState = {
    loadedUsers: [],
    hasNextUsers: false,
    hesPrevUser: false,
    cutUsersInfo: [],
    usersToShow: [],
    step: 0
};

export const usersPageReducer = ( state = initialState, { type, payload } ) => {

    switch ( type ) {

        case types.USERS_LOADED :
            return ({
                ...state,
                    loadedUsers: payload.json.map( utils.mapJsonUsersDataAll ),
                    cutUserInfo: payload.json.map( utils.mapJsonUsersDataCut ),
                    step:0,
                    hasPrevUsers: false,
                    filter: 5,
                    hasNextUsers: payload.json.length / 5 > 1 ? true: false,
                    usersToShow: utils.firstUsersFilter( payload.json )
            })
        case types.CHANGE_USER_DATA_FROM_LIST :
            return ({
                ...state,
                    loadedUsers: utils.setNewUserData( state.loadedUsers, payload ),
                    cutUserInfo: utils.setNewUserData(state.cutUsersInfo, payload),
                    usersToShow: utils.setNewUserData(state.usersToShow, payload)
            })
        case types.FILTER_USERS :
            return ({
                ...state,
                    step:0,
                    usersToShow: payload.filter === 'all' ? state.usersToShow.slice() :  state.usersToShow.slice(0,payload.filter),
                    hasNextUsers: payload.filter === 'all' ? false : state.cutUsersInfo.length / payload.filter > 1 ? true : false,
                    hasPrevUsers: false
            })
        case types.GET_NEXT_USERS :
            return ({
                ...state,
                    step: payload.step,
                    usersToShow: state.cutUsersInfo.slice( payload.step * state.filter,(payload.step+1) * state.filter  ),
                    hasNextUsers: state.cutUsersInfo.length / state.filter > payload.step ? true : false,
                    hasPrevUsers: true
            })
        case types.GET_NEXT_USERS :
            return ({
                ...state,
                    step: payload.step,
                    usersToShow: state.cutUsersInfo.slice( payload.step * state.filter,(payload.step+1) * state.filter  ),
                    hasNextUsers: true,
                    hasPrevUsers: payload.step > 0 ? true : false
            })


    }
    return state

}
