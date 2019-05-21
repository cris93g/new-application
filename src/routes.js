import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Youtube from "./pages/Youtube/Youtube";
import Twitch from "./pages/Twitch/Twitch";

export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={Youtube} exact path="/youtube" />
		<Route component={Twitch} exact path="/twitch/:name" />
	</Switch>
);
