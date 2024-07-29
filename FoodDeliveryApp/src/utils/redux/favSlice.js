import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: 'favourites',
    initialState: {
        items : [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if(index > -1)
                state.items.splice(index,1);
        },
        clearFavourites: (state) => {
            state.items.length = 0;
        }
    }
}
);

export const { addItem, removeItem, clearFavourites } = favSlice.actions;
export default favSlice.reducer;