import { configureStore } from '@reduxjs/toolkit'
import llenguaReducer from  '../features/llengua/llenguaSlice'

export default configureStore({
    reducer: {
        llengua: llenguaReducer,
    },
})