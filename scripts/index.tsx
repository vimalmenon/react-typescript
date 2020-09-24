import "./style.scss";

import "@babel/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
	BrowserRouter as Router
} from "react-router-dom";

import Main from "./page";

ReactDOM.render(
	<Router>
		<Main/>
	</Router>,
	document.getElementById("main"),
);