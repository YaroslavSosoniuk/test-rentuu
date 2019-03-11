import React from 'react';
import UserField from '../UserField/UserField';
import UserTextField from '../UserTextField/UserTextField';
import UserButtonAction from '../UserActionButton/UserActionButton';
import './style.css';

class UserFormEditable extends React.Component {

    constructor ( props ) {

        super( props );
        this.state = {
            name : '',
            lastName : '',
            editable:false
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onSave = this.onSave.bind(this);
        this.handleEditable = this.handleEditable.bind(this);

    }

    componentDidMount () {

        this.setState ({
            name: this.props.name,
            lastName: this.props.lastName
        })

    }
    onChangeName (e)  {

        this.setState(
            { name: e.target.value }
        )

    }
    onChangeLastName  (e) {

        this.setState(
            { lastName: e.target.value }
        )

    }
    onSave  (e) {
        this.props.onChange(this.props.id, this.state.name, this.state.lastName);
        this.setState({ editable: false })

    }
    handleEditable  ( e ) {

        this.setState ({ editable: true })

    }
    render(){

        let editable = this.state.editable;

        return (
            <div>
                {editable ? (
                        <div className='user_form'>
                            <UserTextField onChange={this.onChangeName} name={this.state.name}/>
                            <UserTextField onChange={this.onChangeLastName} lastName={this.state.lastName}/>
                            <UserButtonAction onClick={this.onSave}/>
                        </div>)
                    :
                    (<div className='user_form'>
                        <UserField name={this.props.name} onDblClick={this.handleEditable}/>
                        <UserField lastName={this.props.lastName} onDblClick={this.handleEditable}/>
                    </div>)
                }
            </div>
        )

    }
}
