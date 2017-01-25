import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import {Router, useRouterHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import configureStore from './redux/configureStore';

const initialState = window.REDUX_INITIAL_STATE || {};
const store = configureStore(initialState);
const appHashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const component = (
    <Provider store={store}>
        <Router history={appHashHistory}>
            {routes(store)}
        </Router>
    </Provider>
);

ReactDOM.render(component, document.getElementById('root'));
