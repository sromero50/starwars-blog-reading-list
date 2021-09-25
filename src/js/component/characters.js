import React from "react";
import "../../styles/home.scss";
import { CharacterCard } from "../component/characterCard";

export const Characters = () => {
	return (
		<div className="container my-2 box text-light">
			<h2 className="display-3 text-warning">Characters</h2>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				<CharacterCard />
			</div>
		</div>
	);
};
