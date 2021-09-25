import React from "react";
import "../../styles/home.scss";
import { VehicleCard } from "../component/vehicleCard";

export const Vehicles = () => {
	return (
		<div className="container my-2 box text-light">
			<h2 className="display-3 text-warning">Vehicles</h2>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				<VehicleCard />
			</div>
		</div>
	);
};
