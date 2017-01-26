import * as $ from 'jquery';
export const ACTION_USER_LOGIN = 'ACTION_USER_LOGIN';
export const ACTION_USER_LOGOUT = 'ACTION_USER_LOGOUT';
export const ACTION_USER_REGISTER = 'ACTION_USER_REGISTER';
export const ACTION_USER_LOAD = 'ACTION_USER_LOAD';

function loadUser(user) {
    return { type: ACTION_USER_LOAD, user }
}

export function loginUser(data) {
    return { type: ACTION_USER_LOGIN };
}

export function registerUser(data) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: '/register',
                data: data,
                success: result => {
                    resolve(result);
                },
                error: err => {
                    reject(err);
                }
            });
        }).then((result) => {
            dispatch(loadUser(result))
        }).catch(err => {
            console.log(err);
        })
    };
}

export function logoutUser() {
    return { type: ACTION_USER_LOGOUT };
}
