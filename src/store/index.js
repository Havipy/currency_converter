import { configureStore } from "@reduxjs/toolkit";
import rateReducer from './rateSlice';

export default configureStore({
	reducer: {
		rates: rateReducer
	}
})