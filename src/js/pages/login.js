import React from "react";
import LoginForm from "../component/loginForm";
const Login = () => {
	return (
		<div className="container text-light bg-dark m-start p-3 mt-4 w-25">
			<h2 className="text-warning text-center display-4">Login</h2>
			<LoginForm />
		</div>
	);
};

export default Login;
