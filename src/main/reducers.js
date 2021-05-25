import { ADD_ROOM, SELECT_ROOM } from './actions'

export const rooms = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SELECT_ROOM: {
            const { id } = payload
            return state.map(x => x.id === id ?
                {...x, selected: true } : {...x, selected: false})
        }
        case ADD_ROOM: {
            const { title } = payload
            const newRoom = {
                id: state.length,
                title,
                selected: false
            }
            return state.concat(newRoom)
        }
        default: {
            return state
        }
    }
}
