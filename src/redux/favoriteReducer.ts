import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type State = {
    [id: number]: number
}

const initialState: State = {}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addPostsToFavorites: (state, action) => ({
            ...state,
            [action.payload.id]:
                (state[action.payload.id] || 0) + action.payload.count,
        }),
        removePostFromFavorite: (state, action) => omit(state, action.payload),
    },
})

export const { addPostsToFavorites, removePostFromFavorite } =
    favoritesSlice.actions

export default favoritesSlice.reducer
