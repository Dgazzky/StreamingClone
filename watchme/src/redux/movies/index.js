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
        addMovieToFavorites: ['movie'],
        removeMovieFromFavorites: ['movie'],
        switchMode: null,
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
        Immutable.getIn(state, ['movies', 'viewFavorites'], false)
            ? Immutable.getIn(state, ['movies', 'favorites'], [])
            : Immutable.getIn(state, ['movies', 'movies'], []),

    getSearch: state => Immutable.getIn(state, ['movies', 'search'], ''),
    getFavorites: state => Immutable.getIn(state, ['movies', 'favorites'], []),
    getMode: state =>
        Immutable.getIn(state, ['movies', 'viewFavorites'], false),

    getMoviesByCategory: (state, search) =>
        Immutable.getIn(state, ['movies', 'movies'], []).filter(
            movie => movie.category.attributes.label === search
        ),
    getMoviesBySearch: (state, search) =>
        Immutable.getIn(state, ['movies', 'movies'], []).filter(movie =>
            movie['im:name'].label.toLowerCase().includes(search.toLowerCase())
        ),
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_FETCHING]: (state, { treeFetching }) =>
        state.merge({ treeFetching }),
    [Types.SET_MOVIES]: (state, { movies }) => state.merge({ movies }),
    [Types.SWITCH_MODE]: state =>
        state.merge({ viewFavorites: !state.viewFavorites }),
    [Types.SET_SEARCH]: (state, { search }) => state.merge({ search }),
    [Types.ADD_MOVIE_TO_FAVORITES]: (state, { movie }) =>
        state.merge({ favorites: [...state.favorites, movie] }),
    [Types.REMOVE_MOVIE_FROM_FAVORITES]: (state, { movie }) =>
        state.merge({ favorites: state.favorites.filter(el => el !== movie) }),
})
