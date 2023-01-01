import { Col } from 'react-bootstrap';

function Card({ shoes, i }) {
	return (
		<Col md={4}>
			<img src={`https://codingapple1.github.io/shop/shoes` + (i + 1) + `.jpg`} alt="" width="80%" />
			<h4>{shoes.title}</h4>
			<p>{shoes.content}</p>
		</Col>
	);
}

export default Card;