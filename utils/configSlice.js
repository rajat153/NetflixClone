import { createSlice } from "@reduxjs/toolkit";

const configReducer = createSlice({
    name : "config",
    initialState:{
        lang : "en"
    },
    reducers : {
        changLang : (state, action) => {
            state.lang = action.payload
        }
    }

});

export const {changLang} = configReducer.actions;
export default configReducer.reducer;