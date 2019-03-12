import * as types from './types';
import * as utils from './utils';

const initialState = {
    loadedUsers: [],
    hasNextUsers: false,
    hasPrevUsers: false,
    cutUsersInfo: [],
    usersToShow: [],
    step: 0
};

const usersPageReducer = ( state = initialState, { type, payload } ) => {

    switch ( type ) {

        case types.USERS_LOADED :
            window.payload = payload;

            return ({
                ...state,
                    loadedUsers: payload.map( utils.mapJsonUsersDataAll ),
                    cutUsersInfo: payload.map( utils.mapJsonUsersDataCut ),
                    step:0,
                    hasPrevUsers: false,
                    filter: 5,
                    hasNextUsers: payload.length / 5 > 1 ? true: false,
                    usersToShow: utils.firstUsersFilter( payload )
            })
        case types.CHANGE_USER_DATA_FROM_LIST :
            return ({
                ...state,
                    loadedUsers: utils.setNewUserData( state.loadedUsers, payload ),
                    cutUsersInfo: utils.setNewUserData(state.cutUsersInfo, payload),
                    usersToShow: utils.setNewUserData(state.usersToShow, payload)
            })
        case types.FILTER_USERS :
            return ({
                ...state,
                    step:0,
                    usersToShow: payload.filter === 'all' ? state.cutUsersInfo.slice() :  state.cutUsersInfo.slice(0,payload.filter),
                    hasNextUsers: payload.filter === 'all' ? false : state.cutUsersInfo.length / payload.filter > 1 ? true : false,
                    hasPrevUsers: false,
                    filter:payload.filter
            })
        case types.GET_NEXT_USERS :
            return ({
                ...state,
                    step: payload.step,
                    usersToShow: state.cutUsersInfo.slice( payload.step * state.filter,(payload.step+1) * state.filter  ),
                    hasNextUsers: state.cutUsersInfo.length / state.filter > payload.step ? true : false,
                    hasPrevUsers: true
            })
        case types.GET_PREVIOUS_USERS :
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
export default usersPageReducer;