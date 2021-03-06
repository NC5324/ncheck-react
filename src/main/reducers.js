import {
    CREATING_ROOM,
    CREATING_ROOM_SUCCESS,
    CREATING_ROOM_FAILURE,
    DELETING_ROOM_SUCCESS,
    SELECT_ROOM,
    BEGIN_SELECTION,
    CANCEL_SELECTION,
    ADD_TO_SELECTION,
    REMOVE_FROM_SELECTION,
    DELETE_SELECTION,
    LOADING_ROOMS,
    LOADING_ROOMS_SUCCESS,
    LOADING_ROOMS_FAILURE,
    CREATING_ITEM,
    CREATING_ITEM_SUCCESS,
    CREATING_ITEM_FAILURE
} from './actions'
import RoomsState from '../store/RoomsState'
import { UPDATING_ROOM_SUCCESS } from '../settings/actions'

const initialState = new RoomsState()

export const rooms = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case LOADING_ROOMS: {
            return {
                ...state,
                loadingRooms: true
            }
        }
        case LOADING_ROOMS_SUCCESS: {
            const { rooms } = payload
            return {
                ...state,
                rooms: rooms,
                loadingRooms: false,
            }
        }
        case LOADING_ROOMS_FAILURE: {
            return {
                ...state,
                loadingRooms: false
            }
        }
        case SELECT_ROOM: {
            const { id } = payload

            const newData = state.rooms.map(x => x.id === id ?
                { ...x, selected: true } : { ...x, selected: false })
            return {
                ...state,
                rooms: newData,
                selectedRoom: newData.find(x => x.selected === true)
            }
        }
        case CREATING_ROOM: {
            return {
                ...state,
                creatingRoom: true
            }
        }
        case CREATING_ROOM_SUCCESS: {
            const { room } = payload
            return {
                ...state,
                creatingRoom: false,
                rooms: state.rooms.concat(room)
            }
        }
        case CREATING_ROOM_FAILURE: {
            return {
                ...state,
                creatingRoom: false
            }
        }
        case DELETING_ROOM_SUCCESS: {
            const { room } = payload
            return {
                ...state,
                rooms: state.rooms.filter(r => r.id !== room.id)
            }
        }
        case CREATING_ITEM: {
            return {
                ...state,
                creatingItem: true
            }
        }
        case CREATING_ITEM_SUCCESS: {
            const { item } = payload
            let updatedRoom = state.selectedRoom
            updatedRoom = {
                ...updatedRoom,
                items: updatedRoom.items.concat(item)
            }
            return {
                ...state,
                creatingItem: false,
                rooms: state.rooms.map(x => x.id === updatedRoom.id ? updatedRoom : x),
                selectedRoom: updatedRoom
            }
        }
        case CREATING_ITEM_FAILURE: {
            return {
                ...state,
                creatingItem: false
            }
        }
        case BEGIN_SELECTION: {
            return {
                ...state,
                selectedRoom: {
                    ...state.selectedRoom,
                    selectingItems: true
                }
            }
        }
        case CANCEL_SELECTION: {
            return {
                ...state,
                rooms: state.rooms.map(room => ({
                    ...room,
                    selectingItems: false,
                    selectedItems: []
                })),
                selectedRoom: {
                    ...state.selectedRoom,
                    selectingItems: false,
                    selectedItems: []
                }
            }
        }
        case DELETE_SELECTION: {
            const { deletedItems } = payload
            const updatedRoom = {
                ...state.selectedRoom,
                selectingItems: false,
                selectedItems: [],
                items: state.selectedRoom.items.filter(x => !deletedItems.includes(x))
            }
            return {
                ...state,
                rooms: state.rooms.map(r => r.id === updatedRoom.id ? updatedRoom : r),
                selectedRoom: updatedRoom
            }
        }
        case ADD_TO_SELECTION: {
            const { itemId }  = payload
            const newSelected = state.selectedRoom.items.find(x => x.id === Number(itemId))

            if(!state.selectedRoom.selectingItems
                || state.selectedRoom.selectedItems.includes(newSelected))
                return state

            const updatedRoom = {
                ...state.selectedRoom,
                selectedItems: state.selectedRoom.selectedItems.concat(newSelected)
            }
            return {
                ...state,
                rooms: state.rooms.map(r => r.id === state.selectedRoom.id ? updatedRoom : r),
                selectedRoom: updatedRoom
            }
        }
        case REMOVE_FROM_SELECTION: {
            const { itemId }  = payload
            const updatedRoom = {
                ...state.selectedRoom,
                selectedItems: state.selectedRoom.selectedItems.filter(item => item.id !== Number(itemId))
            }
            return {
                ...state,
                rooms: state.rooms.map(room => room.id === updatedRoom.id  ? updatedRoom : room),
                selectedRoom: updatedRoom
            }
        }
        case UPDATING_ROOM_SUCCESS: {
            const { room } = payload
            return {
                ...state,
                rooms: state.rooms.map(r =>  r.id === room.id ? room : r),
                selectedRoom: room
            }
        }
        default: {
            return state
        }
    }
}
