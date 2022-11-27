import { createSlice } from '@reduxjs/toolkit'
const initialState={
    numOfCount:10,
   
}
const countSlice=createSlice(
    {
        name:'count',
        initialState,
        reducers:{
            ordered:(state)=>{state.numOfCount--},           
        }
    }
)
export default countSlice.reducer
export const {ordered}= countSlice.actions

