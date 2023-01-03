import { configureStore, createSlice } from '@reduxjs/toolkit'

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

let cart = createSlice({
	name: 'cart',
	initialState:
		[
			{ id: 0, name: 'White and Black', count: 2 },
			{ id: 2, name: 'Grey Yordan', count: 1 }
		],
	reducers: {
		increase(state) {
			console.log(state)
			//state.count = state.count + 1
		}
	}
})
export let { increase } = cart.actions

export default configureStore({
	reducer: {
		user: user.reducer,
		cart: cart.reducer
	}
}) 