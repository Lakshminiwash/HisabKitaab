import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/auth.slice"
import groupReducer from "../features/groups/states/newGroup.slice"

export const store = configureStore({
    reducer:{
        auth:authReducer,
        createNewGroup:groupReducer,
    }
})