import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./user/userSlice";

const reducer = combineReducers({
    userReducer
})

export { userActions } from './user/userSlice'

export default configureStore({ reducer })