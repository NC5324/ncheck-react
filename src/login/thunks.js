import {
    attemptLogin,
    loginSuccess,
    loginFailure
} from './actions'

export const login = (username, password) => async(dispatch, getState) => {
    try {
        dispatch(attemptLogin())
        const response = await fetch('http://localhost:8080/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        dispatch(loginSuccess(response.jwt, response.username))
    } catch(err) {
        dispatch(loginFailure("Bad credentials. Try again."))
    }
}
