import { createSlice } from "@reduxjs/toolkit";

const groupSlice = createSlice({
    name: "createNewGroup",
    initialState: {
        groups: [],          // User ke saare groups (har group mein name, category, currency, members, etc.)
        currentGroup: null,  // Active / selected group (jaise { name, category, currency, ... })
        loading: false,
        error: null,
        validationError: null,
    },
    reducers: {
        setGroups: (state, action) => {
            state.groups = action.payload;
            state.loading = false;
            state.error = null;
        },
        addGroup: (state, action) => {
            // action.payload mein naya group object aayega: { _id, name, category, currency, ... }
            state.groups.unshift(action.payload);
            state.currentGroup = action.payload;
            state.loading = false;
            state.error = null;
        },
        setCurrentGroup: (state, action) => {
            state.currentGroup = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setValidationError: (state, action) => {
            state.validationError = action.payload;
        },
        clearGroupState: (state) => {
            state.groups = [];
            state.currentGroup = null;
            state.loading = false;
            state.error = null;
            state.validationError = null;
        },
    },
});

export const {setGroups,addGroup,setCurrentGroup,setLoading,setError,setValidationError,clearGroupState} = groupSlice.actions;

export default groupSlice.reducer;