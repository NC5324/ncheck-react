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

export const UPDATING_ROOM = 'UPDATING_ROOM'
export const updatingRoom = () => ({
    type: UPDATING_ROOM
})

export const UPDATING_ROOM_SUCCESS = 'UPDATING_ROOM_SUCCESS'
export const updatingRoomSuccess = (room) => ({
    type: UPDATING_ROOM_SUCCESS,
    payload: {
        room
    }
})

export const UPDATING_ROOM_FAILURE = 'UPDATING_ROOM_FAILURE'
export const updatingRoomFailure = () => ({
    type: UPDATING_ROOM_FAILURE
})

export const SELECTING_FILE = 'SELECTING_FILE'
export const selectingFile = () => ({
    type: SELECTING_FILE
})

export const SELECTING_FILE_SUCCESS = 'SELECTING_FILE_SUCCESS'
export const selectingFileSuccess = (file) => ({
    type: SELECTING_FILE_SUCCESS,
    payload: {
        file
    }
})

export const SELECTING_FILE_FAILURE = 'SELECTING_FILE_FAILURE'
export const selectingFileFailure = () => ({
    type: SELECTING_FILE_FAILURE
})

export const LOAD_PROFILE_PICTURE = 'LOAD_PROFILE_PICTURE'
export const loadingProfilePicture = (avatar) => ({
    type: LOAD_PROFILE_PICTURE,
    payload: {
        avatar
    }
})
