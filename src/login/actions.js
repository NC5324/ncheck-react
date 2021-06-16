export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT'
export const attemptLogin = () => ({
    type: LOGIN_ATTEMPT
})

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginSuccess = (jwt, username) => ({
    type: LOGIN_SUCCESS,
    payload: {
        jwt,
        username
    }
})

export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const loginFailure = (message) => ({
    type: LOGIN_FAILURE,
    payload: {
        message
    }
})

export const LOGOUT = 'LOGOUT'
export const logout = () => ({
    type: LOGOUT
})
