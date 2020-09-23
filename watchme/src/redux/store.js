import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from '../sagas'

const middleware = []
const sagaMiddleware = createSagaMiddleware()

middleware.push(sagaMiddleware)

const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

export default store
