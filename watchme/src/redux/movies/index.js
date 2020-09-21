import { createReducer, createActions } from 'reduxsauce'
import * as Immutable from 'immutable'

import { MoviesStateRecord } from './types'

const prefix = '[movies] '
const { Types, Creators } = createActions(
    {
        setFetching: null,
        setMovies: ['movies'],
        getMovies: null,
        getServer: ['id'],
        turnOnServer: ['id'],
        turnOffServer: ['id'],
        rebootServer: ['id'],
        setSearch: ['search'],
    },
    { prefix }
)

export const MoviesActionTypes = Types
export default Creators

const INITIAL_STATE = MoviesStateRecord()

export const MoviesSelectors = {
    isFetching: state =>
        Immutable.getIn(state, ['movies', 'isFetching'], false),
    getMovies: state =>
        Immutable.getIn(state, ['movies', 'movies', 'feed', 'entry'], []),
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_FETCHING]: (state, { treeFetching }) =>
        state.merge({ treeFetching }),
    [Types.SET_MOVIES]: (state, { movies }) => state.merge({ movies }),
    [Types.SET_SEARCH]: (state, { search }) => state.merge({ search }),
})
