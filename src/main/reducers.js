import { SELECT_ROOM } from './actions'

export const rooms = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case SELECT_ROOM: {
            const { id } = payload
            return state.map(x => x.id === id ? x.selected = true : x.selected = false)
        }
        default: {
            return state
        }
    }
}
