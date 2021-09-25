import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const VehicleCard = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.vehicles.map((item, index) => {
				return (
					<div className="col card card-body  bg-dark m-3" style={{ minWidth: "18rem" }} key={index}>
						<img src={"https://dummyimage.com/400x200/808080/000000"} className="card-img-top" alt="..." />
						<div className="card-body">
							<h4 className="card-title">{item.name}</h4>
							<p className="card-text">Name: {item.name}</p>
							<p className="card-text">Manufacturer: {item.manufacturer}</p>
							<div className="row d-flex justify-content-between">
								<Link href="#" className="btn btn-outline-primary col-6">
									Learn more!
								</Link>
								<Link href="#" className="btn btn-outline-warning col-2">
									<i className="far fa-heart" />
								</Link>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
