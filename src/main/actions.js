export const SELECT_ROOM = 'SELECT_ROOM'
export const selectRoom = (id) => ({
    type: SELECT_ROOM,
    payload: {
        id
    }
})

export const ADD_ROOM = 'ADD_ROOM'
export const addRoom = (title) => ({
    type: ADD_ROOM,
    payload: {
        title
    }
})

export const ADD_ROOM_ITEM = 'ADD_ROOM_ITEM'
export const addRoomItem = () => ({
    type: ADD_ROOM_ITEM
})

export const BEGIN_SELECTION = 'BEGIN_SELECTION'
export const beginSelection = () => ({
    type: BEGIN_SELECTION
})

export const CANCEL_SELECTION = 'CANCEL_SELECTION'
export const cancelSelection = () => ({
    type: CANCEL_SELECTION
})

export const ADD_TO_SELECTION = 'ADD_TO_SELECTION'
export const addToSelection = (itemId) => ({
    type: ADD_TO_SELECTION,
    payload: {
        itemId
    }
})

export const REMOVE_FROM_SELECTION = 'REMOVE_FROM_SELECTION'
export const removeFromSelection = (itemId) => ({
    type: REMOVE_FROM_SELECTION,
    payload: {
        itemId
    }
})

export const DELETE_SELECTION = 'DELETE_SELECTION'
export const deleteSelection = () => ({
    type: DELETE_SELECTION
})

export const LOADING_ROOMS = 'LOADING_ROOMS'
export const loadingRooms = () => ({
    type: LOADING_ROOMS
})

export const LOADING_ROOMS_SUCCESS = 'LOADING_ROOMS_SUCCESS'
export const loadingRoomsSuccess = (rooms) => ({
    type: LOADING_ROOMS_SUCCESS,
    payload: {
        rooms
    }
})

export const LOADING_ROOMS_FAILURE = 'LOADING_ROOMS_FAILURE'
export const loadingRoomsFailure = () => ({
    type: LOADING_ROOMS_FAILURE
})

