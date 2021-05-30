import {
    ADD_ROOM,
    ADD_ROOM_ITEM,
    SELECT_ROOM,
    BEGIN_SELECTION,
    CANCEL_SELECTION,
    ADD_TO_SELECTION,
    REMOVE_FROM_SELECTION,
    DELETE_SELECTION
} from './actions'

const initialState = {
    rooms: [],
    selectedRoom: {
        items: [],
        selectedItems: [],
        selectionOngoing: []
    }
}

export const rooms = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
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
        case ADD_ROOM: {
            const { title } = payload
            const newRoom = {
                id: state.rooms.length,
                title,
                selected: false,
                items: [],
                selectedItems: [],
                selectionOngoing: false
            }
            return {
                ...state,
                rooms: state.rooms.concat(newRoom)
            }
        }
        case ADD_ROOM_ITEM: {
            let updatedRoom = state.selectedRoom
            const newItem = {
                id: updatedRoom.items.length,
                title: 'test item'
            }
            updatedRoom = {
                ...updatedRoom,
                items: updatedRoom.items.concat(newItem)
            }
            return {
                ...state,
                rooms: state.rooms.map(x => x.id === updatedRoom.id ? updatedRoom : x),
                selectedRoom: updatedRoom
            }
        }
        case BEGIN_SELECTION: {
            return {
                ...state,
                selectedRoom: {
                    ...state.selectedRoom,
                    selectionOngoing: true
                }
            }
        }
        case CANCEL_SELECTION: {
            return {
                ...state,
                selectedRoom: {
                    ...state.selectedRoom,
                    selectedItems: [],
                    selectionOngoing: false
                }
            }
        }
        case DELETE_SELECTION: {
            const updatedRoom = {
                ...state.selectedRoom,
                items: state.selectedRoom.items.filter(x => !state.selectedRoom.selectedItems.includes(x)),
                selectedItems: [],
                selectionOngoing: false
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

            if(!state.selectedRoom.selectionOngoing
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
        default: {
            return state
        }
    }
}
