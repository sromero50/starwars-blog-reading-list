import React from "react";
import { RegisterForm } from "../component/registerForm";
const SignUp = () => {
	return (
		<div className="container text-light bg-dark m-start p-3 mt-4 w-25">
			<h2 className="text-warning text-center display-4">Sign up</h2>
			<RegisterForm />
		</div>
	);
};

export default SignUp;
