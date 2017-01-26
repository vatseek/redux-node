export const ACTION_ERROR_SHOW = 'ACTION_ERROR_SHOW';
export const ACTION_ERROR_HIDE = 'ACTION_ERROR_HIDE';
import * as _ from 'underscore';

function setError(message) {
    return { type: ACTION_ERROR_SHOW, message };
}

export function showError(err) {
    return (dispatch) => {
        let message = err.responseText;
        if (_.isObject(err.responseJSON) && _.has(err.responseJSON, 'error')) {
            message = err.responseJSON.error;
        }
        dispatch(setError(message));
        setTimeout(() => {
            dispatch(hideError());
        }, 2000);
    };
}

export function hideError() {
    return { type: ACTION_ERROR_HIDE };
}