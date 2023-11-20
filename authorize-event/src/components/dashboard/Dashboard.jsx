import Userfront from "@userfront/toolkit/react";
import { Link } from 'react-router-dom';
import '../componentStyle.css';

const userData = JSON.stringify(Userfront.user, null, 2);

export default function Dashboard() {
	return (
		<div className="linkContainer">
			<pre>{userData}</pre>
			<span>{userData.userUuid}</span>
			<button className="mainButton" onClick={Userfront.logout}>Logout</button>

			<Link to={'/'}>Go main</Link>
		</div>

	);
}