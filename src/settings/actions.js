export const UPDATING_USER_DETAILS = 'UPDATING_USER_DETAILS'
export const updatingUserDetails = () => ({
    type: UPDATING_USER_DETAILS
})

export const UPDATING_USER_DETAILS_SUCCESS = 'UPDATING_USER_DETAILS_SUCCESS'
export const updatingUserDetailsSuccess = (jwt, username) => ({
    type: UPDATING_USER_DETAILS_SUCCESS,
    payload: {
        jwt, username
    }
})

export const UPDATING_USER_DETAILS_FAILURE = 'UPDATING_USER_DETAILS_FAILURE'
export const updatingUserDetailsFailure = () => ({
    type: UPDATING_USER_DETAILS_FAILURE
})
