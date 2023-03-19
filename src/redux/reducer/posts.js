import { createReducer } from '@reduxjs/toolkit'
import React from 'react'
import { fetchedPosts } from '../action/action'

let initialState = {
    posts: [],
    posts2: []
}

const posts = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchedPosts, (state, { payload }) => {
            state.posts = payload
            state.posts2 = payload
        })

        // .addCase(filterProducts, (state, { payload }) => {
        //     state.posts = payload !== "all" ? state.posts2.filter(s => s.category === payload) : state.posts2
        // })
        // .addCase(deletePOSTS, (state, { payload }) => {
        //     state.posts = state.posts.filter(s => s.id !== payload)
        // })
        // .addCase(newPosts, (state, { payload }) => {
        //     state.posts = [...state.posts, payload]
        // })
        // .addCase(editPost, (state, { payload }) => {
        //     state.posts = state.posts?.map((val, idx) => {
        //         if (val.id == payload.id) {
        //             return {
        //                 ...val,
        //                 title: payload.Data.title,
        //                 price: payload.Data.price,
        //                 img: payload.Data.img,
        //                 category: payload.Data.category,
        //             }
        //         } else {
        //             return val
        //         }
        //     })
        // })
        .addDefaultCase((state, action) => { })

})

export default posts;