import { SELECTING_FILE, SELECTING_FILE_FAILURE, SELECTING_FILE_SUCCESS } from './actions'

const initialState = {
    selectedFile: null,
    selectingFile: false
}

export const file = (state = initialState, action) => {
    const { type, payload } = action
    switch(type) {
        case SELECTING_FILE: {
            return {
                ...state,
                selectingFile: true
            }
        }
        case SELECTING_FILE_SUCCESS: {
            const { file } = payload
            return {
                ...state,
                selectedFile: file,
                selectingFile: false
            }
        }
        case SELECTING_FILE_FAILURE: {
            return {
                ...state,
                selectingFile: false
            }
        }
        default: return state
    }
}
