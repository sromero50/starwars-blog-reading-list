import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
export const Navbar = () => {
	const [dropdown, setDropdown] = useState(false);
	const toggleOpen = () => setDropdown(!dropdown);
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/" className="navbar-brand">
					<img src={Logo} alt="" width="90" height="40" />
				</Link>
			</div>
			<div className="nav-item dropdown m-auto">
				<div className="dropdown show">
					<button
						className="btn btn-secondary dropdown-toggle"
						href="#"
						role="button"
						id="dropdownMenuLink"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						onClick={toggleOpen}>
						Favorites
					</button>

					<div
						className={`dropleft dropdown-menu ${dropdown ? "show" : ""}`}
						aria-labelledby="dropdownMenuLink">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
