import { configureStore } from "@reduxjs/toolkit";

import todoUser from "./slice/UserSlice";


const store = configureStore({
    reducer:{
        users: todoUser,

    }
})

export default store;