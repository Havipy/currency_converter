import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRates = createAsyncThunk(
	'rates/fetchRates',
	async function (_, { rejectWithValue }) {
		try {
			const response = await axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI');
			return response.data.rates;
		}
		catch (e) {
			return rejectWithValue(e);
		}

	}
)
const rateSlice = createSlice({
	name: 'rates',
	initialState: {
		rates: [],
		loading: true,
		error: null
	},
	reducers: {},
	extraReducers: {
		[fetchRates.pending]: (state) => {
			state.error = null;
			state.loading = true;
		},
		[fetchRates.rejected]: (state, action) => {
			state.error = action.payload;

			state.loading = false;
		},
		[fetchRates.fulfilled]: (state, action) => {
			state.rates = action.payload;
			console.log(state)
			state.loading = false;
		},
	}
})

export default rateSlice.reducer;