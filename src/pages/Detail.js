import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail({ shoes }) {
	let { id } = useParams();
	// let item = shoes.find(function (x) {
	// 	return x.id == id
	// });
	let item = shoes.find((x) => x.id == id);
	let [count, setCount] = useState(0);
	let [alerttxt, setAlerttxt] = useState(true);
	let [num, setNum] = useState('');

	useEffect(() => {
		let timer = setTimeout(() => { setAlerttxt(false) }, 2000)
		return () => {	//useEffect 실행되기전에 //cleanup function
			clearTimeout(timer);
		}
	}, []); //1회만 코드 실행

	useEffect(() => {
		if (isNaN(num) == true) {
			alert('그러지 마세요');
		}
		return () => {	//useEffect 실행되기전에 //cleanup function
			setNum(null);
		}
	}, [num])

	return (
		<div className="container">
			{
				alerttxt === true ?
					<div className="alert alert-warning">
						2초이내 구매시 할인
					</div>
					:
					null
			}

			{/* {count}
			<button onClick={() => { setCount(count + 1) }}></button> */}
			<div className="row">
				<div className="col-md-6">
					<img src={`https://codingapple1.github.io/shop/shoes` + (item.id + 1) + `.jpg`} width="100%" alt="." />
				</div>
				<div className="col-md-6">
					<div><input type="text" onChange={(e) => { setNum(e.target.value) }} onClick={(e) => { e.target.value = null }} /></div>
					<h4 className="pt-5">{item.title}</h4>
					<p>{item.content}</p>
					<p>{item.price}</p>
					<button className="btn btn-danger">주문하기</button>
				</div>
			</div>
		</div>
	);
}

export default Detail;