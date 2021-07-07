import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import Header from "./Header";
import Creations from "./Creations";
import Contact from "./Contact";

ReactDOM.render(
	<React.StrictMode>
		<Home />
		<Header />
		<Creations />
		<Contact />
	</React.StrictMode>,
	document.getElementById("root")
);
