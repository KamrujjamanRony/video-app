import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: ''
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
        state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
        const tagIndex = state.tags.indexOf(action.payload);
        if (tagIndex !== -1) {
            state.tags.splice(tagIndex, 1);
        }
    },
    searched: (state, action) => {
        state.search = action.payload;
    }
  }
});

export const {tagSelected,tagRemoved,searched} = filterSlice.actions;
export default filterSlice.reducer;