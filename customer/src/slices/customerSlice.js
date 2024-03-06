import {createSlice} from '@reduxjs/toolkit'
import customerReducer, { addCustomer } from '../slices/customerSlice';

const initialState=[];

const customerSlice=createSlice({
    name:'customer',
    initialState,
    reducers:{
        addCustomer(state,action){
           state.push(action.payload)
        }
    }
})

// export const {addCustomer}=customerSlice.actions
export default customerSlice.reducer;
export const { addCustomer } = customerSlice.actions;
