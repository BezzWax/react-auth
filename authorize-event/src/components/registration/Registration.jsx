import Userfront, { SignupForm, LoginForm, } from "@userfront/toolkit/react";
import '../componentStyle.css';

Userfront.init("rbv7x85n");

export default function Registration() {
	return (
		<div>
			<SignupForm />
			{/* <LoginForm /> */}
		</div>
	);
}