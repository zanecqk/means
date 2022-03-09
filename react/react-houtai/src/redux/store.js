import { createStore, combineReducers } from 'redux'
import { CollApsedReducer } from './reducers/CollapsedReducer'
import { LoadingReducer } from './reducers/LoadingReducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'kerwin',
    storage,
    blacklist: ['LoadingReducer']
}
const reducer = combineReducers({
    CollApsedReducer,
    LoadingReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(persistedReducer);
const persistor = persistStore(store)
export {
    store,
    persistor
}

/*
 store.dispatch()

 store.subsribe()

*/
const a = function test2() {
    Promise.resolve().then(() => {
        console.log(0);
        return Promise.resolve(4);
    }).then((res) => {
        console.log(res)
    })
    Promise.resolve().then(() => {
        console.log(1)
    }).then(() => {
        console.log(2)
    }).then(() => {
        console.log(3)
    }).then(() => {
        console.log(5)
    }).then(() => {
        console.log(6)
    })
}
a()