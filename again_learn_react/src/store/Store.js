import {configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './CartSlice'
export const Store = configureStore(
    {
        reducer :{
            cart : cartSliceReducer
        }
    }
)
