import { call, put, all, takeLatest } from 'redux-saga/effects'
import MoviesAction, { MoviesActionTypes } from '../redux/movies'

export function* getMovies(api) {
    yield put(MoviesAction.setFetching(true))

    const {
        ok: moviesOK = false,
        data: data = {},
        problem: moviesProblem,
    } = yield call(api.getMovies, {})

    yield put(MoviesAction.setFetching(false))
    if (moviesOK) {
        yield put(
            MoviesAction.setMovies(
                data.feed.entry.map(el => ({
                    ...el,
                    rating: Math.floor(Math.random() * Math.floor(7)),
                    match: Math.floor(Math.random() * Math.floor(100)),
                }))
            )
        )
    } else if (moviesProblem) {
        console.log('Error getting movies ', moviesProblem)
    }
}

export default function* moviesSagas(api) {
    yield all([yield takeLatest(MoviesActionTypes.GET_MOVIES, getMovies, api)])
}
