import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './actions'

const initialState = {
    jwt: null,
    username: null,
    success: null,
    message: null,
    loading: false,
}

export const user = (state = initialState, action) => {
    const { type, payload } = action
    switch(type) {
        case LOGIN_ATTEMPT: {
            return {
                ...state,
                loading: true
            }
        }
        case LOGIN_SUCCESS: {
            const { jwt, username } = payload
            return {
                ...state,
                jwt: jwt,
                username: username,
                loading: false,
                success: true
            }
        }
        case LOGIN_FAILURE: {
            const { message } = payload
            return {
                ...state,
                loading: false,
                success: false,
                message: message
            }
        }
        default: {
            return state;
        }
    }
}
