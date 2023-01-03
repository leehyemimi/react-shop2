import './App.scss';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import data from "./data";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Event from "./pages/Event";
import Notpage from "./pages/Notpage";
import Cart from "./pages/Cart";

function App() {
	let [shoes, setShoes] = useState(data);
	let navigate = useNavigate();

	return (
		<div className="App">
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand onClick={() => { navigate('/') }}>ShoeShop</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
							<Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
							<Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Routes>
				<Route path="/" element={<Main shoes={shoes} setShoes={setShoes} />} />
				<Route path="/detail/:id" element={<Detail shoes={shoes} />} />
				<Route path="/event" element={<Event />}>
					<Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
					<Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
				</Route>
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<Notpage />} />
			</Routes>
		</div>
	);
}

export default App;