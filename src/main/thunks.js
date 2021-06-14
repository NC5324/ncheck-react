import {
    loadingRooms,
    loadingRoomsSuccess,
    loadingRoomsFailure,
    creatingRoomFailure,
    creatingRoomSuccess,
    creatingRoom
} from './actions'
import Room from '../payload/Room'

export const loadRooms = (userId) => async(dispatch, getState) => {
    const { jwt } = getState().user
    try {
        dispatch(loadingRooms)

        const response = await fetch(`http://localhost:8080/api/rooms/user?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + jwt
            }
        })

        let rooms = await response.json()
        rooms = rooms.map(room => new Room(room.id, room.name, room.items))
        dispatch(loadingRoomsSuccess(rooms))
    } catch(err) {
        dispatch(loadingRoomsFailure())
        alert(err)
    }
}

export const createRoom = (room) => async(dispatch, getState) => {
    const { jwt } = getState().user
    try {
        const response = await fetch(`http://localhost:8080/api/rooms/new`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + jwt,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: room.name,
                owner: 5, // Hard-coded owner because participants of a room are not stored in state yet
                items: room.items.map(item => item.id)
            })
        })

        let createdRoom = await response.json()
        dispatch(creatingRoomSuccess(new Room(createdRoom.id, createdRoom.name, createdRoom.items)))
    } catch (err) {
        dispatch(creatingRoomFailure())
        alert(err)
    }
}
