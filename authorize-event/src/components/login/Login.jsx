import Userfront, { LoginForm, } from "@userfront/toolkit/react";
import { Link } from 'react-router-dom';
import '../componentStyle.css';

Userfront.init("rbv7x85n");

export default function Login() {
	return (
		<div>
			<h2>Login</h2>
			<LoginForm />

			<div className="linkContainer">
				<Link to={'/'}>Don`t have account?</Link>
			</div>

		</div>

	)
}