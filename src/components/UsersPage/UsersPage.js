import React from 'react';
import UserFilter from '../CountOfUsersFilter/CUF';
import UserCard from '../UserCard/UserCard';
import { connect } from "react-redux";
import PaginationButton from '../PaginationButton/PaginationButton';
import {filterUsers, getData, getNextUsers, getPrevUsers} from "../../actions/actions";
import './style.css';


class UsersPage extends React.Component {

    constructor( props ) {

        super( props );
        this.onChangeFilter = this.onChangeFilter.bind(this);

    }

    componentDidMount(){

        this.props.getData();
        console.log(this.props.match);

    }
    onChangeFilter  (e) {

        this.props.filterUsers({filter: e.target.value});

    }

    render() {


        let users = this.props.users.map( val => <UserCard name={val.name} lastName={val.lastName} ipAddress={val.ipAddress} key={val.id} match={this.props.match} id={val.id}/>);
        console.log(this.props);
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
        ...state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        filterUsers: data => dispatch(filterUsers(data)),
        getData: () => dispatch(getData()),
        getPrevUsers: step => dispatch(getPrevUsers(step)),
        getNextUsers: step => dispatch(getNextUsers(step))

    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPage);