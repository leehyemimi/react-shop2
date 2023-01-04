import { Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Card({ shoes, i }) {
	let navigate = useNavigate();
	return (
		<Col md={4} onClick={() => { navigate('/detail/' + i) }}>
			<img src={`https://codingapple1.github.io/shop/shoes` + (i + 1) + `.jpg`} alt="" width="80%" />
			<h4>{shoes.title}</h4>
			<p>{shoes.content}</p>
		</Col>
	);
}

export default Card;