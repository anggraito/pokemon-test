import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
// import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import authReducer from '../modul/auth/reducersAuth'

// export default configureStore({
//   reducer: {
//     auth    : authReducer
//   },
//   middleware: [thunk],
// })


