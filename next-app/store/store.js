// import { createStore, applyMiddleware, compose } from 'redux';

// import createSagaMiddleware from 'redux-saga';
// import { persistStore } from 'redux-persist';

// import rootReducer from './reducers/rootReducers';

// export default function (initialState) {
//     let store;

//     const sagaMiddleware = createSagaMiddleware();

//     const isClient = typeof window !== 'undefined';

//     if (isClient) {
//         const { persistReducer } = require('redux-persist');
//         const storage = require('redux-persist/lib/storage').default;

//         const persistConfig = {
//             key: 'root',
//             storage
//         };

//         store = createStore(
//             persistReducer(persistConfig, rootReducer),
//             compose(
//                 applyMiddleware(sagaMiddleware)
//             )

//         );

//         store.__PERSISTOR = persistStore(store);
//     } else {
//         store = createStore(
//             rootReducer,
//             compose(
//                 applyMiddleware(sagaMiddleware)
//             )
//         );
//     }

//     return store;
// };

import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

const SET_CLIENT_STATE = 'SET_CLIENT_STATE';

import rootReducer from './reducers/rootReducers';

const makeConfiguredStore = (reducer) =>
    createStore(reducer, undefined, applyMiddleware(logger));

const makeStore = () => {

    const isServer = typeof window === 'undefined';

    if (isServer) {

        return makeConfiguredStore(rootReducer);

    } else {

        // we need it only on client side
        const { persistStore, persistReducer } = require('redux-persist');
        const storage = require('redux-persist/lib/storage').default;

        const persistConfig = {
            key: 'nextjs',
            whitelist: ['fromClient'], // make sure it does not clash with server keys
            storage
        };

        const persistedReducer = persistReducer(persistConfig, rootReducer);
        const store = makeConfiguredStore(persistedReducer);

        store.__persistor = persistStore(store); // Nasty hack

        return store;
    }
};

export const wrapper = createWrapper(makeStore);

