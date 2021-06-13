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
        const data = await response.json()
        if(data.error) {
            throw new Error("Bad credentials. Try again.")
        }
        dispatch(loginSuccess(data.jwt, data.username))
        console.log('Login successful')
    } catch(err) {
        dispatch(loginFailure(err))
        console.log(err)
    }
}
