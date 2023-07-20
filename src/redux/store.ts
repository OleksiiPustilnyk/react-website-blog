import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'
import favoriteReducer from './favoriteReducer'

export const store = configureStore({
    reducer: {
        postsLikeState: likeReducer,
        postInFavorite: favoriteReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
