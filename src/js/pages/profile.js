import React, { useContext } from "react";
import { Context } from "../store/appContext";

console.log();
const Profile = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron bg-light">
			<h1 className="display-4">Bienvenido {store.user.username}!</h1>
		</div>
	);
};

export default Profile;