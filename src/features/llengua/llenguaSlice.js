import {createSlice} from '@reduxjs/toolkit'

export const llenguaSlice = createSlice({
    name: 'llengua',
    initialState: {
        value: null,
        obres: [],
        autors: [],
    },
    reducers: {
        assigna: (state, action) => {
            if(state.value!==action.payload) {
                state.value = action.payload;
                state.obres=[];
                state.autors=[];
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const {assigna} = llenguaSlice.actions

export default llenguaSlice.reducer