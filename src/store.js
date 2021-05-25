import { createStore, combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { rooms } from './main/reducers'
import { persistReducer } from 'redux-persist'

const reducers = {
    rooms,
}

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers(reducers)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => createStore(persistedReducer)

