import {ACTION_ERROR_SHOW, ACTION_ERROR_HIDE} from '../actions/errorActions';

export default function (state = {}, action) {
    if (action.type === ACTION_ERROR_SHOW) {
        return action.message;
    } else if (action.type === ACTION_ERROR_HIDE) {
        return {};
    } else {
        return state;
    }
}