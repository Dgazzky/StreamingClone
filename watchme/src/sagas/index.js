import { all } from 'redux-saga/effects'

import API from '../services/api'

import moviesSagas from './moviesSagas'

const api = API.create()

export default function* root() {
    yield all([moviesSagas(api)])
}
