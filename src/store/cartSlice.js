import { createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
	name: 'cart',
	initialState:
		[
			{ id: 0, name: 'White and Black', count: 2 },
			{ id: 2, name: 'Grey Yordan', count: 1 }
		],
	reducers: {
		addCount(state, action) {
			// state.map((a, i) => {
			// 	if (state[i].id === action.payload) {
			// 		state[i].count ++
			// 	}
			// })
			let nm = state.findIndex((a) => { return a.id === action.payload })
			state[nm].count++
		},
		addItem(state, action) {
			let nm = state.findIndex((a) => { return a.id === action.payload.id })
			if (nm === -1) {
				state.push(action.payload)
			} else {
				state[nm].count++;
			}
		},
		delCount(state, action) {
			let nm = state.findIndex((a) => { return a.id === action.payload })
			state.splice(nm, 1)
		}
	}
})
export let { addCount, addItem, delCount } = cart.actions

export default cart;