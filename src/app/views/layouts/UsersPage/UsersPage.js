import React from 'react';
import UserFilter from '../../components/CountOfUsersFilter/CUF';
import UserCard from '../../components/UserCard/UserCard';
import { connect } from "react-redux";
import PaginationButton from '../../components/PaginationButton/PaginationButton';
import {changeUserDataFromList, getNextUsers, getPrevUsers,getUsersData,filterUsers} from "../../../store/ducks/usersPage/actions";
import './style.css';


class UsersPage extends React.Component {

    constructor( props ) {

        super( props );
        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.onChangeUserData = this.onChangeUserData.bind(this);

    }

    componentDidMount(){

        this.props.getUsersData();

    }
    onChangeFilter  (e) {

        this.props.filterUsers({filter: e.target.value});

    }
    onChangeUserData (id, name, lastName ){
        changeUserDataFromList({id,name,lastName});
    }

    render() {


        let users = this.props.users.map( val => <UserCard name={val.name} lastName={val.lastName} ipAddress={val.ipAddress} key={val.id} match={this.props.match} id={val.id} onChange = { (id,name,lastName) => this.onChangeUserData(id,name,lastName)}/>);

        return (
            <div className='page_container'>
                <UserFilter userCount={this.props.filter} onChange={this.onChangeFilter}/>
                { users }
                <div className='user_pagination'>
                    {this.props.hasPrevUsers && <PaginationButton type={'previous'} onclick={() => this.props.getPrevUsers({step: this.props.step - 1})}/>}
                    {this.props.hasNextUsers && <PaginationButton type={'forward'} onclick={() => this.props.getNextUsers({step: this.props.step + 1})}/>}
                </div>

            </div>
        )

    }


}
function mapStateToProps(state) {
    return {
        users: state.usersToShow,
        hasNextUsers: state.hasNextUsers,
        hasPrevUsers: state.hasPrevUsers,
        filter:filter,
        step:step
    };
}
function mapDispatchToProps(dispatch) {
    return {
        filterUsers: data => dispatch(filterUsers(data)),
        getUsersData: () => dispatch(getUsersData()),
        getPrevUsers: step => dispatch(getPrevUsers(step)),
        getNextUsers: step => dispatch(getNextUsers(step)),
        changeUserDataFromList: (data) => dispatch(changeUserDataFromList(data))

    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPage);