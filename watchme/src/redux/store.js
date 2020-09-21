import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from '../sagas'

const middleware = []
const enhancers = []
const sagaMiddleware = createSagaMiddleware()

middleware.push(sagaMiddleware)
enhancers.push(applyMiddleware(...middleware))

const store = createStore(rootReducer, compose(...enhancers))

sagaMiddleware.run(rootSaga)

export default store
