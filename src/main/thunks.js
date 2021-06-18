import {
    loadingRooms,
    loadingRoomsSuccess,
    loadingRoomsFailure,
    creatingRoomFailure,
    creatingRoomSuccess,
    creatingItemSuccess, creatingItemFailure, deletingRoomSuccess, selectRoom
} from './actions'
import Room from '../payload/Room'
import Item from '../payload/Item'

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
                owner: 5,
                participants: [5], // Hard-coded members because id is not stored in user state
                items: room.items.map(item => item.id)
            })
        })

        let createdRoom = await response.json()
        dispatch(creatingRoomSuccess(new Room(createdRoom.id, createdRoom.name,
            createdRoom.items.map(item => new Item(item.id, item.name, item.createdBy)))))
    } catch (err) {
        dispatch(creatingRoomFailure())
        alert(err)
    }
}

export const addItemToRoom = (item, room) => async(dispatch, getState) => {
    const { jwt } = getState().user
    try {
        const response = await fetch(`http://localhost:8080/api/rooms/${room.id}/items`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + jwt,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: 5, // Hard-coded for testing purposes because there is no ID in user state yet
                name: item.name
            })
        })

        const createdItem = (await response.json()).data
        dispatch(creatingItemSuccess(new Item(createdItem.id, createdItem.name, createdItem.createdBy)))
    } catch (err) {
        dispatch(creatingItemFailure())
        alert(err)
    }
}

export const deleteRoom = (roomId) => async(dispatch, getState) => {
    try {
        const response = await fetch(`http://localhost:8080/api/rooms/delete?id=${roomId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + getState().user.jwt
            }
        })

        const del = await response.json()
        dispatch(deletingRoomSuccess(new Room(del.data.id, del.data.name, del.data.items)))
        dispatch(selectRoom(getState().rooms.rooms[0].id))
    } catch(err) {
        alert(err)
    }
}
