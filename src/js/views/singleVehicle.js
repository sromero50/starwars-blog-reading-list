import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container jumbotron bg-dark text-light py-3 row m-auto mt-3 form-inline">
			<div className="col">
				<h1 className="display-4 text-warning">{store.vehicles[params.theid].name}</h1>
				<h4>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed purus dapibus, tincidunt diam
					ac, dictum ex. Vestibulum auctor quis arcu in laoreet. Maecenas nisi magna, egestas a odio a,
					tincidunt auctor magna. Praesent eu elit tempus, bibendum leo nec, aliquet nisl. Praesent sit amet
					venenatis elit, sit amet malesuada lectus. Vivamus dolor metus, maximus non ultrices nec, feugiat eu
					sem. Pellentesque ullamcorper posuere tempus. Suspendisse aliquet, nisi vitae ornare tristique,
					justo elit pulvinar quam, ut dictum enim sapien consequat metus. Etiam iaculis, velit sed vehicula
					maximus, arcu tellus condimentum ante, vel facilisis enim ante id nisl.{" "}
				</h4>
			</div>
			<div className="col">
				<img src={"https://dummyimage.com/800x600/808080/000000"} className="card-img-top" alt="..." />
			</div>

			<hr className="my-4" />
			<div className="container row">
				<div className="col text-warning">
					<h4>Name:</h4>
					<h5>{store.vehicles[params.theid].name}</h5>
				</div>
				<div className="col text-warning">
					<h4>Vehicle class:</h4>
					<h5>{store.vehicles[params.theid].vehicle_class}</h5>
				</div>
				<div className="col text-warning">
					<h4>Manufacturer:</h4>
					<h5>{store.vehicles[params.theid].manufacturer}</h5>
				</div>
				<div className="col text-warning">
					<h4>Cost in credits:</h4>
					<h5>{store.vehicles[params.theid].cost_in_credits}</h5>
				</div>
				<div className="col text-warning">
					<h4>Passengers:</h4>
					<h5>{store.vehicles[params.theid].passengers}</h5>
				</div>
			</div>
		</div>
	);
};

SingleVehicle.propTypes = {
	match: PropTypes.object
};
