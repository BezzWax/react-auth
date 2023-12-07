import React from 'react';
import { useFormik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentStyle.css';
import Dashboard from '../Dashboard/Dashboard';

const validate = values => {
	const errors = {};

	if (!values.email) {
		errors.email = 'Required';
	} else if (!localStorage.getItem(values.email)) {
		errors.email = 'User not found';
	}

	if (!values.password) {
		errors.password = 'Required';
	} else if (localStorage.getItem(values.email) !== values.password) {
		errors.password = 'Incorrect password';
	}

	return errors;
};

const Login = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validate,
		onSubmit: values => {
			console.log('Form submitted with values:', values);

			if (localStorage.getItem('registered') === 'true' && localStorage.getItem(values.email) === values.password) {
				localStorage.setItem('authenticated', 'true');
				navigate(<Dashboard />);
			} else {
				console.log('User not found or incorrect password');
			}
		},
	});

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<h1>Login</h1>
				<label htmlFor="email">Email Address</label>
				<input
					id="email"
					name="email"
					type="email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.errors.email ? <div>{formik.errors.email}</div> : null}

				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				{formik.errors.password ? <div>{formik.errors.password}</div> : null}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Login;
