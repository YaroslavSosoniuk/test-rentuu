import React from 'react';
import { getUserData , changeUserData } from "../../../store/ducks/userpage/actions";
import { connect } from 'react-redux';
import UserCard from '../../components/UserCard/UserCard';

class UserPage extends React.Component {

    constructor ( props ) {

        super( props );
        this.changeUserData = this.changeUserData.bind(this);

    }
    changeUserData (id, name, lastName ){
        console.log({id,name,lastName})
        this.props.changeUserData( {id,name,lastName})
    }
    componentDidMount () {

        this.props.getUserData(this.props.match.params.id);

    }
    render () {
        console.log(this.props);
        return (
            <div>
                {this.props.userInfo.length > 0 ?
                    (<UserCard
                        name={this.props.userInfo[0].name}
                        lastName={this.props.userInfo[0].lastName}
                        ipAddress={this.props.userInfo[0].ipAddress}
                        email={this.props.userInfo[0].email}
                        gender={this.props.userInfo[0].gender}
                        country={this.props.userInfo[0].country}
                        id={this.props.userInfo[0].id}
                        match={this.props.match}
                        onChange={ this.changeUserData}
                    />)
                    : (
                        <div>
                            loading ...
                        </div>)
                }
            </div>
        )
    }

}
function mapStateToProps ( state ) {
    return { userInfo : state.userReducer.userInfo }
}
function mapDispatchToProps (dispatch) {
    return {
        getUserData: id => dispatch(getUserData(id)),
        changeUserData: data => dispatch(changeUserData(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
