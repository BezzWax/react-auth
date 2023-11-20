import { Link } from 'react-router-dom';
import Registration from './registration/Registration';
import './componentStyle.css';

export default function Home() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
				</ul>
			</nav>

			<div className='container'>
				<Registration />
			</div>
		</div>
	);
}