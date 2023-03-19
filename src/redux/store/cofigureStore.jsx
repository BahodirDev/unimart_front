import { configureStore } from "@reduxjs/toolkit"
import posts from "../reducer/posts"
export const value = configureStore(({
    reducer: { posts },
    devTools: true
}))