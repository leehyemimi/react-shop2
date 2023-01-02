import { Container, Row } from 'react-bootstrap';
import Card from "../components/Card";
import axios from "axios";
import { useState } from "react";

function Main({ shoes, setShoes }) {
	let [more, setMore] = useState(1);
	let [loading, setLoading] = useState(false)

	return (
		<>
			<div className="main-bg"></div>
			<Container>
				<Row>
					{shoes.map((a, i) => {
						return (
							<Card shoes={shoes[i]} i={i} key={i} />
						)
					})}

					{
						loading == true ?
							<div className='loading'>
								로딩중입니다...
							</div>
							:
							null
					}
				</Row>
			</Container>
			<button onClick={() => {
				setLoading(true);	//로딩중 UI띄우기
				<div>로딩중</div>
				setMore(more = more + 1);
				if (more > 3) {
					alert('더 이상 상품이 없습니다.');
					setLoading(false);	//로딩중 UI숨기기
				} else {
					axios.get(`https://codingapple1.github.io/shop/data` + more + `.json`)
						.then((data) => { //성공할때
							let copy = [...shoes, ...data.data]
							setShoes(copy);
							setLoading(false);	//로딩중 UI숨기기
						})
						.catch(() => {
							console.log('실패함ㅅㄱ');
							setLoading(false);	//로딩중 UI숨기기
						})
				}
			}}>버튼</button>
		</>
	);
}

export default Main;