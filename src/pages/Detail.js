import { Nav } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

function Detail({ shoes }) {
	let navigate = useNavigate();
	let dispatch = useDispatch()

	let { id } = useParams();
	// let item = shoes.find(function (x) {
	// 	return x.id == id
	// });
	let item = shoes.find((x) => x.id == id);
	let [count, setCount] = useState(0);
	let [alerttxt, setAlerttxt] = useState(true);
	let [num, setNum] = useState('');
	let [tab, setTab] = useState(0);
	let [fade1, setFade1] = useState('');

	useEffect(() => {
		setTimeout(() => { setFade1('end') }, 100)
		return () => {
			setFade1('')
		}
	}, [])

	useEffect(() => {
		let timer = setTimeout(() => { setAlerttxt(false) }, 2000)
		return () => {	//useEffect 실행되기전에 //cleanup function
			clearTimeout(timer);
		}
	}, []); //1회만 코드 실행1

	useEffect(() => {
		if (isNaN(num) == true) {
			alert('그러지 마세요');
		}
		return () => {	//useEffect 실행되기전에 //cleanup function
			setNum(null);
		}
	}, [num])

	return (
		<div className={"start" + fade1}>
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
						<button className="btn btn-danger" onClick={() => {
							navigate('/cart');
							dispatch(addItem({ id: item.id, name: item.title, count: 1 }))
						}}>주문하기</button>
					</div>


					<Nav variant="tabs" defaultActiveKey="link0">
						<Nav.Item>
							<Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>버튼1</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link1" onClick={() => { setTab(1) }}>버튼2</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link2" onClick={() => { setTab(2) }}>버튼3</Nav.Link>
						</Nav.Item>
					</Nav>
					<TabContent tab={tab} />
				</div>
			</div>
		</div>
	);
}


function TabContent({ tab }) {
	let [fade, setFade] = useState('');
	useEffect(() => {
		setTimeout(() => { setFade('end') }, 100)
		return () => {
			setFade('')
		}
	}, [tab])
	return (
		<div className={'start' + fade}>
			{[<div>1</div>, <div>2</div>, <div>3</div>][tab]}
		</div>
	)
	// if (tab == 0) {
	// 	return (
	// 		<div>1</div>
	// 	)
	// } else if (tab == 1) {
	// 	return (
	// 		<div>2</div>
	// 	)
	// } else {
	// 	return (
	// 		<div>3</div>
	// 	)
	// }
}

export default Detail;