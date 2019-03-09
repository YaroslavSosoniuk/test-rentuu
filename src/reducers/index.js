
const initialState = {
    allUsers: [],
    usersToShow: [],
    hasPrevUsers: false,
    hasNextUsers: true,
    filter:5,
    step:0,
    userPageInfo:{},
    users:[],
    chosenUser:{}
};
function rootReducer(state = initialState, action) {
    switch (action.type) {

        case 'FILTER':
            if (action.payload.filter == 'all') {
                return Object.assign({}, state, {
                    hasPrevUsers: false,
                    hasNextUsers: false,
                    filter:'all',
                    step:0,
                    users: state.usersToShow
                })
            } else {
                return Object.assign({} , state, {

                    users: state.usersToShow.filter( (user, index) =>  {

                        if ( index < action.payload.filter * (state.step + 1) && index >= action.payload.filter * state.step ) return user

                    }),
                    step: 0,
                    hasPrevUsers: false,
                    hasNextUsers: true,

                })
            }
        case 'GET_NEXT_USERS':
            return Object.assign ({}, state, {

                users: state.usersToShow.filter( (val,id) => {

                    if (id >= state.filter* action.payload.step && id < state.filter * (action.payload.step + 1)) return val


                } ),
                hasPrevUsers: true,
                step: action.payload.step,
                hasNextUsers: (state.usersToShow.length -  state.filter * (action.payload.step - 1) < state.filter) ? false : true

            })
        case 'GET_PREV_USERS':
            return Object.assign({}, state, {

                users: state.usersToShow.filter( (val,id) => {

                    if (id >= state.filter* (action.payload.step ) && id < state.filter * (action.payload.step + 1 )) return val

                } ),
                hasNextUsers: true,
                step:action.payload.step,
                hasPrevUsers: action.payload.step == 0 ? false : true

            })
        case 'CHANGE_USER_DATA':
            return Object.assign({}, state, {
                users: state.users.map( (user) => {

                    if (user.id === action.payload.id){
                        user.first_name = action.payload.name;
                        user.last_name = action.payload.lastName;
                        return user
                    }
                    return user

                } ),
                chosenUser : state.chosenUser.id === action.payload.id
                    ?
                    state.chosenUser.map(
                        (user) => {
                            user.first_name = action.payload.name;
                            user.last_name = action.payload.lastName;
                            return user
                        })
                    : state.chosenUser
            })
        case "DATA_LOADED":
            initialState.allUsers = action.payload;
            initialState.usersToShow = action.payload.map( ( user ) => {
                return {
                        id: user.id,
                        name: user.first_name,
                        lastName : user.last_name,
                        ipAddress: user.ip_address
                }
            });
            return Object.assign({}, state, {
                users: state.filter == 'all' ? state.usersToShow : state.usersToShow.filter( (user, id) => {

                    return id < state.filter * (state.step+1) && id >= state.filter * state.step

                } )
            })
        case "GET_USER_DATA":
            return Object.assign( {}, state, {
                chosenUser: state.allUsers.filter( (user ) => user.id === action.payload.id)
            } )
    }
    return state
};
export default rootReducer;