import "./App.css";
import FlashyBox from "./FlashyBox";
import tylerbig from "./tylerbig.png";
import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export function App() {
	const [darkMode, setDarkMode] = useState(false);

	const isDark = () => {
		darkMode ? setDarkMode(false) : setDarkMode(true);
	};

	useEffect(() => {
		const currentMode = localStorage.getItem("dark-mode-value");
		if (currentMode) {
			setDarkMode(JSON.parse(currentMode));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("dark-mode-value", JSON.stringify(darkMode));
	});

	const darkModeBkg = darkMode ? "dark-bkg" : "light-bkg";
	const darkModeHome = darkMode ? "dark-bkg" : "home-bkg";
	const darkModeText = darkMode ? (
		<p>Dark{"\n"}Mode</p>
	) : (
		<p>Light{"\n"}Mode</p>
	);
	const darkToggle = darkMode
		? "switch-button button-toggle"
		: "switch-button";

	return (
		<div id="dark-mode-wrapper" className={darkModeBkg}>
			<div id="switch-container">
				<div onClick={isDark} id="switch" className={darkToggle}>
					<div className="switch-button"></div>
				</div>
				<span id="switch-text">{darkModeText}</span>
			</div>

			<div className="Home">
				<div id="home-wrapper" className={darkModeHome}>
					<div id="box-wrapper">
						<FlashyBox textH1="Front End Developer" />
					</div>
				</div>

				<div id="about-wrapper">
					<div id="about">
						<img
							className="tyler-img"
							src={tylerbig}
							alt="tyler portrait"
						></img>
						<div className="column">
							<h2>LEADER IN ALL THINGS TYLER</h2>
							<p className="column-text">
								Founded in 1998, Tyler Strong development group
								has been working with front end development
								since 2016. Starting out with learning Python in
								his dorm room, he quickly switched to learning
								how to develop websites. He took a class for
								HTML and CSS in 2017 and has been writing them
								ever since. Later in 2019, he learned
								JavaScript. Tyler is proud to say he has
								extensive knowledge of HTML5 and CSS, and is a
								strong advocate for flex box usage and CSS grid.
								In the past year, Tyler has done the following:
								{"\n"}He recently learned{" "}
								<b>
									React.JS! This website even uses React
									hooks.{" "}
								</b>
								He has deployed a bot to{" "}
								<b>AWS servers configured with node. </b>
								This <b>bot utilizes a private API</b> to fetch
								in game market prices, and will suggest the best
								course of actions to users for their task. He
								learned the amazing tool that is{" "}
								<b>CSS grid.</b> Configured a server with Nginx
								for a personal project. The next goal is to
								implement React Router to alter the site url
								when you navigate via navbar.
							</p>
						</div>
					</div>
				</div>
			</div>

			<section id="creations">
				<div id="creations-wrapper">
					<div id="creations-heading">
						<h1>SOME CREATIONS</h1>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/imaspork"
						>
							<button>
								<span>More on Github</span>
							</button>
						</a>
					</div>
					<div id="grid-wrapper">
						<div className="item-1 grid-item">
							<h1>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.corsair.com/us/en/ryzen-3000-series"
								>
									Corsair Ryzen<br></br>3000 Landing Page
								</a>
							</h1>
						</div>
						<div className="item-2 grid-item">
							<h1>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://airqualitychecker.surge.sh/"
								>
									React Air<br></br>Quality Checker
								</a>
							</h1>
						</div>
						<div className="item-3 grid-item">
							<h1>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/imaspork/discordvar-js"
								>
									BDO Market <br></br>API Bot
								</a>
							</h1>
						</div>
						<div className="item-4 grid-item">
							<h1>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/imaspork/react-website-revised-design"
								>
									React <br></br>Portfolio site
								</a>
							</h1>
						</div>
					</div>
				</div>
			</section>

			<section id="footer">
				<Contact />
				<p className="center-text s-padding">
					Tyler Strong &#169; 2021
				</p>
			</section>
		</div>
	);
}

export default App;
