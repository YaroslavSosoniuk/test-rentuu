import App from './components/App/App';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';


window.store = store;
console.log( store );
console.log( store.getState() );

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app'));