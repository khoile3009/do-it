import axios from '../../axios-orders';

import * as actionTypes from './actionTypes';
import { getLocalItem, setLocalItem, removeLocalItem } from '../../Utils/LocalStorage';

export function authStart() {
    return {
        type: actionTypes.AUTH_START
    };
};

export function authSuccess(token, userId, username, fullname) {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId,
        username: username,
        fullname: fullname
    };
};

export function authFail(error) {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export function clearError() {
    return {
        type: actionTypes.CLEAR_ERROR,
    }
}

export function logout() {

    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export function signin(username, password, remember) {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            username: username,
            password: password,
        };
        let url = 'api/user/auth/signin';
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                if (remember === true) {
                    setLocalItem('TOKEN', response.data.token);
                }
                dispatch(authSuccess(response.data.token, response.data.user.id, response.data.user.username, response.data.user.full_name));
                dispatch(hideModal());
            })
            .catch(err => {
                dispatch(authFail("Invalid Credentials"));
            });
    };
};

export function register(username, email, password, first_name, last_name, remember) {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            username: username,
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name
        }
        console.log(authData)
        let url = 'api/user/auth/register';

        axios.post(url, authData)
            .then(response => {
                console.log(response);
                if (remember === true) {
                    setLocalItem('TOKEN', response.data.token);
                }
                dispatch(authSuccess(response.data.token, response.data.user.id, response.data.user.username, response.data.user.full_name));
                dispatch(showInfoModal());
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error))
            })
    }
}


export function signout(token) {
    return dispatch => {
        console.log('Token ' + token)
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        }
        let data = null
        console.log(headers)
        let url = 'api/user/auth/signout';
        axios.post(url, data, { headers: headers })
            .then(response => {
                console.log(response);
                removeLocalItem('TOKEN');
                dispatch(logout())
            })
            .catch(err => {
                console.log(err)
                removeLocalItem('TOKEN');
                dispatch(logout())
            })
    }
}

export function retrieveUserFromToken(token) {
    return dispatch => {
        console.log('Token ' + token)
        dispatch(authStart())
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        }

        let url = 'api/user/auth/user';
        axios.get(url, { headers: headers })
            .then(response => {
                console.log(response);
                dispatch(authSuccess(token, response.data.id, response.data.username, response.data.full_name));
            })
            .catch(err => {
                console.log(err)
                removeLocalItem('TOKEN')
                dispatch(authFail(null))
            })
    }
}