import React from "react";
import "../../styles/home.scss";
import { PlanetCard } from "../component/planetCard";

export const Planets = () => {
	return (
		<div className="container my-3 box text-light">
			<h2 className="display-3 text-warning">Planets</h2>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				<PlanetCard />
			</div>
		</div>
	);
};
