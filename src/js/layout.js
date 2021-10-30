import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Redirect } from "react-router-dom";
import { Home } from "./pages/home";
import { SingleCharacter } from "./pages/singleCharacter";
import { SinglePlanet } from "./pages/singlePlanet";
import { SingleVehicle } from "./pages/singleVehicle";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Redirect exact path="/home" to="/" />
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/profile/">
							<Profile />
						</Route>
						<Route path="/signup/">
							<SignUp />
						</Route>
						<Route path="/login/">
							<Login />
						</Route>
						<Route exact path="/character/:id">
							<SingleCharacter />
						</Route>
						<Route exact path="/planet/:id">
							<SinglePlanet />
						</Route>
						<Route exact path="/vehicle/:id">
							<SingleVehicle />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
