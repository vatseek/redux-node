import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import App, {Dashboard, Login, Register} from 'components/App';
import { isUserSignedIn } from 'redux/models/user';


function requireAuth(nextState, transition, cb) {
    setTimeout(() => {
        if (!isUserSignedIn(store.getState())) {
            transition('/login');
        }
        cb();
    }, 0);
}

function requireAnonimous(nextState, transition, cb) {
    setTimeout(() => {
        if (isUserSignedIn(store.getState())) {
            transition('/dashboard');
        }
        cb();
    }, 0);
}

let store;

export default function routes(storeRef) {
    store = storeRef;

    return (
        <Route component={App} path='/'>
            <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
            <Route path="/login" component={Login} onEnter={requireAnonimous} />
            <Route path="/register" component={Register} />
            <IndexRedirect to="dashboard" />
        </Route>
    );
}
