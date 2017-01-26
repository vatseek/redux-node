import * as $ from 'jquery';
export const ACTION_USER_LOGIN = 'ACTION_USER_LOGIN';
export const ACTION_USER_LOGOUT = 'ACTION_USER_LOGOUT';
export const ACTION_USER_REGISTER = 'ACTION_USER_REGISTER';
export const ACTION_USER_LOAD = 'ACTION_USER_LOAD';
export const ACTION_USER_ERROR = 'ACTION_USER_LOAD';

function loadUser(user) {
    return { type: ACTION_USER_LOAD, user };
}


export function actionError(err) {
    return { type: ACTION_USER_ERROR, err };
}

export function loginUser(data) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: '/login',
                data: data,
                success: result => resolve(result),
                error: err => reject(err)
            });
        }).then((result) => dispatch(loadUser(result))).catch(err => dispatch(actionError(err)));
    };
}

export function registerUser(data) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: '/register',
                data: data,
                success: result => resolve(result),
                error: err => reject(err)
            });
        }).then((result) => dispatch(loadUser(result))).catch(err => dispatch(actionError(err)));
    };
}

export function logoutUser() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: '/logout',
                success: result => resolve(result),
                error: err => reject(err)
            });
        }).then((result) => dispatch(loadUser(null))).catch(err => dispatch(actionError(err)));
    };
}
