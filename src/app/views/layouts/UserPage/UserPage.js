import React from 'react';
import { getUserData , changeUserData} from "../../../store/ducks/userpage/actions";
import { connect } from 'react-redux';
import UserCard from '../../components/UserCard/UserCard';

class UserPage extends React.Component {

    constructor ( props ) {

        super( props );
        this.changeUserData = this.changeUserData.bind(this);

    }
    changeUserData (id, name, lastName ){
        this.props.changeUserData({id,name,lastName})
    }
    componentDidMount () {

        this.props.getUserData({id:this.props.match.params.id});

    }
    render () {
        console.log(this.props);
        return (
            <div>
                {this.props.chosenUser.length > 0 ?
                    (<UserCard
                        name={this.props.chosenUser[0].name}
                        lastName={this.props.chosenUser[0].lastName}
                        ipAddress={this.props.chosenUser[0].ipAddress}
                        email={this.props.chosenUser[0].email}
                        gender={this.props.chosenUser[0].gender}
                        country={this.props.chosenUser[0].country}
                        id={this.props.chosenUser[0].id}
                        match={this.props.match}
                        onChange={(id,name,lastName) => this.changeUserData({id,name,lastName})}
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
function mapDispatchToProps (dispatch) {
    return {
        getUserData: id => dispatch(getUserData(id)),
        changeUserData: data => dispatch(changeUserData(data))
    }
}
export default connect((state) =>   { chosenUser: state.userInfo }, mapDispatchToProps)(UserPage)