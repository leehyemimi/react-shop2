import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { changeName, addAge } from "../store/userSlice";
import { addCount, delCount } from "../store/cartSlice";

function Cart() {
	let state = useSelector((state) => { return state });
	let dispatch = useDispatch()

	return (
		<div>
			<h6>{state.user.name} 의 장바구니</h6>
			{/* {state.user.age} */}
			{/* <button onClick={() => {
				dispatch(addAge(1))
			}}>+</button> */}
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경하기</th>
						<th>삭제하기</th>
					</tr>
				</thead>
				<tbody>
					{
						state.cart.map((a, i) => {
							return (
								<tr key={state.cart[i].id}>
									<td>{state.cart[i].id}</td>
									<td>{state.cart[i].name}</td>
									<td>{state.cart[i].count}</td>
									<td>
										<button onClick={() => {
											dispatch(addCount(state.cart[i].id))
										}}>+</button>
									</td>
									<td>
										<button onClick={() => {
											dispatch(delCount(state.cart[i].id))
										}}>삭제</button>
									</td>
								</tr>
							)
						})
					}

				</tbody>
			</Table>
		</div>
	);
}

export default Cart;