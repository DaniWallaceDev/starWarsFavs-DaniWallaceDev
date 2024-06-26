import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Characters } from "./views/characters";
import { SingleCharacter } from "./views/singleCharacter";
import { SinglePlanet } from "./views/singlePlanet";
import { Planets } from "./views/planets";
import { Vehicles } from "./views/vehicles";
import { SingleVehicle } from "./views/singleVehicle";
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
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/characters/:character_uid" element={<SingleCharacter />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:planet_uid" element={<SinglePlanet />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/vehicles/:vehicle_uid" element={<SingleVehicle />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
