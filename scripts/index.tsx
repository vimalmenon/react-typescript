import "./style.scss";

import "@babel/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";


import Main from "./page";

ReactDOM.render(
	<Main/>,
	document.getElementById("main"),
);