export const SELECT_ROOM = 'SELECT_ROOM'
export const selectRoom = (id) => ({
    type: SELECT_ROOM,
    payload: {
        id
    }
})

export const CREATING_ROOM = 'CREATING_ROOM'
export const creatingRoom = () => ({
    type: CREATING_ROOM
})

export const CREATING_ROOM_SUCCESS = 'CREATING_ROOM_SUCCESS'
export const creatingRoomSuccess = (room) => ({
    type: CREATING_ROOM_SUCCESS,
    payload: {
        room
    }
})

export const CREATING_ROOM_FAILURE = 'CREATING_ROOM_FAILURE'
export const creatingRoomFailure = () => ({
    type: CREATING_ROOM_FAILURE
})

export const CREATING_ITEM = 'CREATING_ITEM'
export const creatingItem = () => ({
    type: CREATING_ITEM
})

export const CREATING_ITEM_SUCCESS = 'CREATING_ITEM_SUCCESS'
export const creatingItemSuccess = (item) => ({
    type: CREATING_ITEM_SUCCESS,
    payload: {
        item
    }
})

export const CREATING_ITEM_FAILURE = 'CREATING_ITEM_FAILURE'
export const creatingItemFailure = () => ({
    type: CREATING_ITEM_FAILURE
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
export const deleteSelection = (deletedItems) => ({
    type: DELETE_SELECTION,
    payload: {
        deletedItems
    }
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

