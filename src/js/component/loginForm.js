import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
const LoginForm = () => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({ username: "", password: "" });
	const [auth, setAuth] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		actions.login(form.username, form.password);
		if (localStorage.getItem("token") != "") {
			setAuth(true);
		}
	};

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setForm({ ...form, [name]: value });
	};

	return (
		<>
			{auth ? (
				<Redirect to="/home" />
			) : (
				<form action="" id="login" name="loginForm" onSubmit={handleSubmit}>
					<div className="form-group my-3">
						<label className="h5">Username</label>
						<input
							className="form-control"
							type="text"
							value={form.username}
							name="username"
							placeholder="Enter Username"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group my-3">
						<label className="h5">Password</label>
						<input
							className="form-control"
							type="password"
							value={form.password}
							name="password"
							placeholder="Enter Password"
							onChange={handleChange}
							required
						/>
					</div>
					<button type="submit" className="btn btn-warning w-100">
						Login
					</button>
				</form>
			)}
		</>
	);
};

export default LoginForm;
