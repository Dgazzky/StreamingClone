import { combineReducers } from 'redux'

import * as Movies from './movies'

export default combineReducers({
    movies: Movies.reducer,
})
