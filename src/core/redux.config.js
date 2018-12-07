// @flow
import {compose, createStore} from 'redux'

/* CUSTOM REDUX DEV TOOLS CONFIGURATION */
const reduxDevToolExtensionComposeConfiguration = process.env.NODE_ENV === 'development' ? {} : Object.freeze({
    features: {
        pause: false, // start/pause recording of dispatched actions
        lock: false, // lock/unlock dispatching actions and side effects
        persist: false, // persist states on page reloading
        export: true, // export history of actions in a file
        import: 'custom', // import history of actions from a file
        jump: false, // jump back and forth (time travelling)
        skip: false, // skip (cancel) actions
        reorder: false, // drag and drop actions in the history list
        dispatch: false, // dispatch custom actions or action creators
        test: false // generate tests for the selected actions
    }
})

/* REDUX DEVTOOLS */
const composeEnhancers = typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined' ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(reduxDevToolExtensionComposeConfiguration) : compose

/**
 * REDUX STORE CONFIGURATIONS
 */
export const configureStore = (rootReducers, initialState) => createStore(
    rootReducers,
    initialState,
    composeEnhancers()
)