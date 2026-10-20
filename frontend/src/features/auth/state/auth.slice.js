import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: null,
        error: null,
        validationError: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
            state.error = false;
        },
        setValidationError: (state, action) => {
            state.validationError = action.payload
        },
        logoutUser: (state) => {
            state.user = null,
                state.loading = false,
                state.error = null
        }
    }
})

export const { setUser, setLoading, setError, logoutUser, setValidationError } = authSlice.actions;
export default authSlice.reducer