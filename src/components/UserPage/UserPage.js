import React from 'react';
import { getUserData } from "../../actions/actions";
import { connect } from 'react-redux';
import UserCard from '../UserCard/UserCard';

class UserPage extends React.Component {

    constructor ( props ) {

        super( props );

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
    return {getUserData: id => dispatch(getUserData(id))}
}
export default connect((state) =>  {return { chosenUser: state.chosenUser }}, mapDispatchToProps)(UserPage)