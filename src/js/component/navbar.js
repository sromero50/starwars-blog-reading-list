import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/" className="navbar-brand">
					<img src={Logo} alt="" width="90" height="40" />
				</Link>
			</div>
			<div className="dropdown mr-3">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					<li>
						<a className="dropdown-item" href="#">
							Action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Another action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</li>
				</ul>
			</div>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
		</nav>
	);
};
