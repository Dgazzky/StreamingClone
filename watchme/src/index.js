import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import Movies from './components'
import 'antd/dist/antd.css'

ReactDOM.render(
    <Provider store={store}>
        <Movies />
    </Provider>,
    document.getElementById('root')
)
