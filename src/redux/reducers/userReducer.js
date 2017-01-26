import {ACTION_USER_LOGIN, ACTION_USER_LOGOUT, ACTION_USER_REGISTER, ACTION_USER_LOAD} from '../actions/userActions';

export default function (state = {}, action) {
    if (action.type === ACTION_USER_LOGIN) {
        return state;
    } else if (action.type === ACTION_USER_LOGOUT) {
        return state;
    } else if (action.type === ACTION_USER_REGISTER) {
        return {...action.data};
    } else if (action.type === ACTION_USER_LOAD) {
        return {...action.user};
    } else {
        return state;
    }
}
