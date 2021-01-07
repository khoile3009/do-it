import "./Theme/App.scss";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPageContainer from "./General/Containers/LandingPage/LandingPageContainer.js";
import NavigationBarContainer from "./General/Containers/NavigationBar/NavigationBarContainer";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/landing">
					<LandingPageContainer></LandingPageContainer>
				</Route>
				<Route path="/">
					<NavigationBarContainer></NavigationBarContainer>
				</Route>
				<Route path="/">
					<Redirect to="/homepage"></Redirect>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
