import React from 'react';
import { useFormik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentStyle.css';
import Dashboard from '../Dashboard/Dashboard';

const validate = values => {
	const errors = {};

	if (!values.name) {
		errors.name = 'Required';
	} else if (values.name.length > 15) {
		errors.name = 'Must be 15 characters or less';
	}

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	if (!values.password) {
		errors.password = 'Required';
	} else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$$/i.test(values.password)) {
		errors.password = 'Invalid password';
	}

	if (!values.passwordConfirm) {
		errors.passwordConfirm = 'Required';
	} else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$$/i.test(values.passwordConfirm)) {
		errors.passwordConfirm = 'Invalid passwordConfirm';
	}

	if (values.password !== values.passwordConfirm) {
		errors.passwordConfirm = 'Password not match';
	}

	return errors;
};

const Registration = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			passwordConfirm: ''
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
			localStorage.setItem('registered', 'true');
			localStorage.setItem(`${values.email}`, `${values.password}`);
			navigate('/');
		},
	});
	return (
		<div>
			<h1>Registration</h1>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					name="name"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.name}
				/>
				{formik.errors.name ? <div>{formik.errors.name}</div> : null}


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

				<label htmlFor="passwordConfirm">Password confirm</label>
				<input
					id="passwordConfirm"
					name="passwordConfirm"
					type="password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.passwordConfirm}
				/>
				{formik.errors.passwordConfirm ? <div>{formik.errors.passwordConfirm}</div> : null}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Registration;