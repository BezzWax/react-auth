// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectUser } from './Store/userSliser';

// const PrivateRoute = ({ component: Component, ...rest }) => {
// 	const currentUser = useSelector(selectUser);

// 	return (
// 		<Route
// 			{...rest}
// 			render={(props) =>
// 				currentUser ? (
// 					<Component {...props} />
// 				) : (
// 					<Navigate to="/login" />
// 				)
// 			}
// 		/>
// 	);
// };

// export default PrivateRoute;
