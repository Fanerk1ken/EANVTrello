import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../store.ts";

const SLICE_NAME = 'counter'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const getValueSelector = (store: RootState) => store.counterSlice.value


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

