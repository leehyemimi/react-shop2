import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
	name: 'user',
	initialState: { name: 'kim', age: 20 },
	reducers: {
		changeName(state) {
			state.name = 'park'
		},
		addAge(state, action) {
			state.age = state.age + action.payload
		}
	}
})

export let { changeName, addAge } = user.actions

export default user;