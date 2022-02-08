import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { recordReducer } from './recordReducers'
import { categoryReducer } from './categoryReducer'

export const rootReducers = combineReducers({
    userReducer,
    recordReducer,
    categoryReducer
})