
import { Outlet } from "react-router-dom";

function EventEvent() {
	return (
		<div className="event">
			<h2>오늘의 이벤트</h2>
			<Outlet></Outlet>
		</div>
	);
}

export default EventEvent;