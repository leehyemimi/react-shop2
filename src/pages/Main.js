import { Container, Row } from 'react-bootstrap';
import Card from "../components/Card";

function Main({ shoes }) {

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
				</Row>
			</Container>
		</>
	);
}

export default Main;