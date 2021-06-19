import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE, LOGOUT
} from './actions'
import {
    LOAD_PROFILE_PICTURE,
    UPDATING_USER_DETAILS,
    UPDATING_USER_DETAILS_FAILURE,
    UPDATING_USER_DETAILS_SUCCESS
} from '../settings/actions'

const initialState = {
    jwt: null,
    username: null,
    success: null,
    loading: false,
    avatar: null
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
            return {
                ...state,
                loading: false,
                success: false
            }
        }
        case LOGOUT: {
            return {}
        }
        case UPDATING_USER_DETAILS: {
            return {
                ...state,
                loading: true
            }
        }
        case UPDATING_USER_DETAILS_SUCCESS: {
            const { username, jwt } = payload
            return {
                ...state,
                username: username,
                jwt: jwt,
                loading: false,
            }
        }
        case UPDATING_USER_DETAILS_FAILURE: {
            return {
                ...state,
                loading: false
            }
        }
        case LOAD_PROFILE_PICTURE: {
            const { avatar } = payload
            return {
                ...state,
                avatar: avatar
            }
        }

        default: {
            return state;
        }
    }
}
