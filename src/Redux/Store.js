import  countReducer  from './Login/countSlice'
import { configureStore } from '@reduxjs/toolkit'




const Store = configureStore(
    {
        reducer:{count:countReducer},
        
    }
)
export default Store