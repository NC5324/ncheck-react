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

