import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchHouses = createAsyncThunk("fetchHouses", async () => {
    const data = await fetch('https://4bb4d2ad-5531-49d5-a6be-ff7b18372377-00-3d45m9j3jca4p.picard.replit.dev/listing')
    return data.json()
})


const housesSlice = createSlice({
    name: 'houses',
    initialState: {
        isLoading: false,
        data: [],
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHouses.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchHouses.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchHouses.rejected, (state, action) => {
            state.error = true;
        })
    }

})

export default housesSlice.reducer;