import { createStore, combineReducers, applyMiddleware } from 'redux';
import {profileReducer} from './reducers/profile_reducer'
import {LikeReducer} from './reducers/LikeReducer'
import {DislikeReducer} from './reducers/DislikeReducer'

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    profileReducer,
    LikeReducer,
    DislikeReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;