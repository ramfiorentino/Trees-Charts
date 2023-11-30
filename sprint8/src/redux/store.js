import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/features/balance/balanceSlice'

export const store = configureStore({
    reducer: {
            counter: counterReducer,
    }
}) 