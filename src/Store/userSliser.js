import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
	},
	reducers: {
		loginUser: (state, action) => {
			state.currentUser = action.payload;
		},
		logoutUser: (state) => {
			state.currentUser = null;
		},
		registerUser: (state, action) => {
			state.currentUser = action.payload;
		},
	},
});

export const { loginUser, logoutUser, registerUser } = userSlice.actions;

export const selectUser = (state) => state.user.currentUser;

export default userSlice.reducer;