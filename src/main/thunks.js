import {
    loadingRooms,
    loadingRoomsSuccess,
    loadingRoomsFailure
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
        console.log(rooms)
        rooms = rooms.map(room => new Room(room.id, room.name, room.items))
        console.log(rooms)
        dispatch(loadingRoomsSuccess(rooms))
    } catch(err) {
        dispatch(loadingRoomsFailure())
        alert(err)
    }
}
