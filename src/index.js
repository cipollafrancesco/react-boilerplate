import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux'
import {combineReducers} from 'redux'
import {configureStore} from './core/redux.config'

/* APP REDUCERS */
const reducers = combineReducers({})


ReactDOM.render(
    <Provider store={configureStore(reducers)}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

// Service Workers
serviceWorker.register()
