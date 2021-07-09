import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import Header from "./Header";
import Creations from "./Creations";
import Footer from "./Footer";

ReactDOM.render(
	<React.StrictMode>
		<Home />
		<Header />
		<Creations />
		<Footer />
	</React.StrictMode>,
	document.getElementById("root")
);
