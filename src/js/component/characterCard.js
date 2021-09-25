import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const CharacterCard = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.characters.map((item, index) => {
				return (
					<div className="col card card-body bg-dark m-3" style={{ minWidth: "18rem" }} key={index}>
						<img src={"https://dummyimage.com/400x200/808080/000000"} className="card-img-top" alt="..." />
						<div className="card-body">
							<h4 className="card-title">{item.name}</h4>
							<p className="card-text">Gender: {item.gender}</p>
							<p className="card-text">Hair color: {item.hair_color}</p>
							<p className="card-text">Eye color: {item.eye_color}</p>
							<div className="row d-flex justify-content-between">
								<Link to={"/character/" + index} className="btn btn-outline-primary col-6">
									Learn more!
								</Link>
								<button className="btn btn-outline-warning col-2">
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