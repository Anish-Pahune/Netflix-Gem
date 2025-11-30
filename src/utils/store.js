import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gemReducer from "./gemSlice";
import langConfigReducer from "./langConfigSlice"

const store = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gem: gemReducer,
            langConfig: langConfigReducer,
        }
    }
)

export default store;