import { createStore, combineReducers } from 'redux'
import { rooms } from './main/reducers'

const reducers = {
    rooms,
}

const rootReducer = combineReducers(reducers)

export const configureStore = () => createStore(rootReducer)

