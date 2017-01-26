import React from 'react';
import ReactDOM from 'react-dom';
// import { createHashHistory } from 'history';
import {Router, /*useRouterHistory,*/ hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import configureStore from './redux/configureStore';

const initialState = window.REDUX_INITIAL_STATE || {};
const store = configureStore({...initialState, error: { }});
// const appHashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const component = (
    <Provider store={store}>
        <Router history={hashHistory}>
            {routes(store)}
        </Router>
    </Provider>
);

ReactDOM.render(component, document.getElementById('root'));
