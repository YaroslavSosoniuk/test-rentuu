import React from 'react';
import { connect } from 'react-redux';
import UsersPage from '../UsersPage/UsersPage';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom';
import UserPage from '../UserPage/UserPage';
import './App.css';

function App () {

    return (
        <Router>
            <div className={'app_container'}>
            <Link to={'/'}> <span className={'home_button'}>Home</span> </Link>
                <Route path="/" exact component={UsersPage} />
                <Route path={'/user/:id'} component={UserPage}/>
            </div>

        </Router>
    );
}
export default App;