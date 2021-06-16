import {
    UPDATING_USER_DETAILS,
    UPDATING_USER_DETAILS_SUCCESS,
    UPDATING_USER_DETAILS_FAILURE
} from './actions'

export const settings = (state, action) => {
    const { type, payload } = action
    switch(type) {
        case UPDATING_USER_DETAILS: {

        }
        case UPDATING_USER_DETAILS_SUCCESS: {

        }
        case UPDATING_USER_DETAILS_FAILURE: {

        }
        default:
            return state
    }
}
