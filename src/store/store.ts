import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice.ts'
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {TypedUseSelectorHook} from "react-redux";

export const store = configureStore({
    reducer: {counterSlice},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector