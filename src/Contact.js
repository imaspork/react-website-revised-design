import React from "react";
import github from "./github.png";
import gmail from "./gmail.png";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";

const Contact = () => {
	return (
		<section id="contact">
			<div id="contact-grid">
				<a className="contact-item-1">
					<img className="contact-img" src={linkedin}></img>
				</a>
				<a className="contact-item-2">
					<img className="contact-img" src={gmail}></img>
				</a>
				<a className="contact-item-3">
					<img className="contact-img" src={github}></img>
				</a>
				<a className="contact-item-4">
					<img className="contact-img" src={twitter}></img>
				</a>
			</div>
		</section>
	);
};

export default Contact;
