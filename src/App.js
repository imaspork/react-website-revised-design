import "./App.css";
import FlashyBox from "./FlashyBox";
import tylerbig from "./tylerbig.png";
import React, { useEffect, useState } from "react";
import Contact from "./Contact";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDarkMode: false,
		};
	}

	render() {
		const isDark = this.state.isDarkMode;
		const darkModeText = isDark ? "Dark" : "Light";
		const darkModeBkg = isDark ? "dark-bkg" : "light-bkg";
		const switchTextColor = isDark ? "white" : "black";
		return (
			<div>
				<div id="switch-container">
					<div
						onClick={() => this.setState({ isDarkMode: !isDark })}
						className={
							isDark
								? " switch-button button-toggle"
								: "switch-button"
						}
						id="switch"
					>
						<div className="switch-button"></div>
					</div>
					<span className={switchTextColor} id="switch-text">
						{darkModeText}
					</span>
				</div>

				<div className="Home">
					<div
						id="home-wrapper"
						className={isDark ? "dark-bkg" : "home-bkg"}
					>
						<div id="box-wrapper">
							<FlashyBox textH1="Front End Developer" />
						</div>
					</div>

					<div id="about-wrapper" className={darkModeBkg}>
						<div id="about">
							<img
								className="tyler-img"
								src={tylerbig}
								alt="tyler portrait"
							></img>
							<div className="column">
								<h2>LEADER IN ALL THINGS TYLER</h2>
								<p className="column-text">
									Founded in 1998, Tyler Strong development
									group has been working with front end
									development since 2016. Starting out with
									learning Python in his dorm room, he quickly
									switched to learning how to develop
									websites. He took a class for HTML and CSS
									in 2017 and has been writing them ever
									since. Later in 2019, he learned JavaScript.
									Tyler is proud to say he has extensive
									knowledge of HTML5 and CSS, and is a strong
									advocate for flex box usage and CSS grid. In
									the past year, Tyler has done the following.{" "}
									<b>Learned the basics of React.JS!</b> He's
									currently looking into <b>React Hooks!</b>{" "}
									He has deployed a bot to{" "}
									<b>AWS servers configured with node. </b>
									This <b>bot utilizes a private API</b> to
									fetch in game market prices, and will
									suggest the best course of actions to users
									for their task. He learned the amazing tool
									that is <b>CSS grid.</b> Configured a server
									with Nginx for a personal project.
								</p>
							</div>
						</div>
					</div>
				</div>

				<section id="creations" className={darkModeBkg}>
					<div id="creations-wrapper">
						<div id="creations-heading">
							<h1>SOME CREATIONS</h1>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/imaspork/stats-preview-card-component"
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
										href="https://github.com/imaspork/stats-preview-card-component"
									>
										Card <br></br>Component
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

				<section id="footer" className={darkModeBkg}>
					<Contact />
					<p className="center-text s-padding">
						Tyler Strong &#169; 2021
					</p>
				</section>
			</div>
		);
	}
}

export default App;
