
// import logger from 'redux-logger';
// import { applyMiddleware, createStore } from 'redux';
// import { createWrapper } from 'next-redux-wrapper';

// const SET_CLIENT_STATE = 'SET_CLIENT_STATE';

// import rootReducer from './reducers/rootReducers';

// const makeConfiguredStore = (reducer) =>
//     createStore(reducer, undefined, applyMiddleware(logger));

// const makeStore = () => {

//     const isServer = typeof window === 'undefined';

//     if (isServer) {

//         return makeConfiguredStore(rootReducer);

//     } else {

//         // we need it only on client side
//         const { persistStore, persistReducer } = require('redux-persist');
//         const storage = require('redux-persist/lib/storage').default;

//         const persistConfig = {
//             key: 'nextjs',
//             whitelist: ['fromClient'], // make sure it does not clash with server keys
//             storage
//         };

//         const persistedReducer = persistReducer(persistConfig, rootReducer);
//         const store = makeConfiguredStore(persistedReducer);

//         store.__persistor = persistStore(store); // Nasty hack

//         return store;
//     }
// };

// export const wrapper = createWrapper(makeStore);

import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/rootReducers'

let store

function initStore(initialState) {
    return createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}


export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}