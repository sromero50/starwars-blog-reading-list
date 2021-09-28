import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const PlanetCard = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.planets.map((item, index) => {
				return (
					<div className="col card card-body bg-dark m-3" style={{ minWidth: "18rem" }} key={index}>
						<img src={"https://dummyimage.com/400x200/808080/000000"} className="card-img-top" alt="..." />
						<div className="card-body">
							<h4 className="card-title">{item.name}</h4>
							<p className="card-text">Population: {item.population}</p>
							<p className="card-text">Terrain: {item.terrain}</p>
							<div className="row d-flex justify-content-between align-items-end form-inline">
								<Link to={"/planet/" + item.id} className="btn btn-outline-primary col-6">
									Learn more!
								</Link>
								<button
									onClick={() => actions.addFavorite(item)}
									className="btn btn-outline-warning col-2">
									<i className="far fa-heart" />
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
