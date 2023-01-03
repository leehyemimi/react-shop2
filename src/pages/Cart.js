import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { changeName, addAge, increase } from "../store";

function Cart() {
	let state = useSelector((state) => { return state });
	let dispatch = useDispatch()

	return (
		<div>
			<h6>{state.user.name} {state.user.age}의 장바구니</h6>
			<button onClick={() => {
				dispatch(addAge(1))
			}}>+</button>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경하기</th>
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
											dispatch(increase())
										}}>+</button>
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