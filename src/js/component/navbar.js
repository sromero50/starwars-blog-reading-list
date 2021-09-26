import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../../img/logo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = useState(false);
	const toggleOpen = () => setDropdown(!dropdown);
	const params = useParams();

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
						Favorites {store.favorites.length}
					</button>

					<div
						className={`dropleft dropdown-menu ${dropdown ? "show" : ""}`}
						aria-labelledby="dropdownMenuLink">
						<ul className="list-group">
							{store.favorites.map(item => {
								return (
									<li key={item.id} className="dropdown-item list-group-item form-inline">
										<Link
											to={"/character/" + item.id}
											style={{ textDecoration: "none", color: "black" }}>
											{item.name}
										</Link>
										<span onClick={() => actions.delFavorite(item.name)}>
											<i className="fas fa-times" />
										</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
