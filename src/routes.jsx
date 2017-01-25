import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import App, {Dashboard, Login, Register, Logout} from 'components/App';
// import CounterPage from 'components/CounterPage';
// import HelloWorldPage from 'components/HelloWorldPage';
// import TimePage from 'components/TimePage';
import {isUserSignedIn} from 'redux/models/user';

function requireAuth(nextState, transition, cb) {
    setTimeout(() => {
        if (!isUserSignedIn(store.getState())) {
            transition('/login');
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
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <IndexRedirect to="dashboard" />
        </Route>
    );
}
