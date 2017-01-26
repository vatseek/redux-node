import * as _ from 'underscore';

export function isUserSignedIn(state) {
    return !_.isEmpty(state.user);
}
