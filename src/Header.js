import React from "react";

const Header = () => {
	return (
		<div>
			<nav>
				<div id="nav-wrapper">
					<h2>Tyler Strong</h2>
					<div id="r-nav">
						<a className="link link-line" href="#about">
							About
						</a>
						<a className="link link-line" href="#creations">
							Portfolio
						</a>
						<a className="link link-line" href="#contact">
							Contact
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
