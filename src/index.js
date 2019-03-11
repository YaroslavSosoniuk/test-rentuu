import App from './app/views/layouts/App/App';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app'));