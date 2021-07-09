import React from "react";
import github from "./github.png";
import gmail from "./gmail.png";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";

const Contact = () => {
	return (
		<section id="contact">
			<div id="contact-grid">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/tyler-strong-46b0a4129/"
					className="contact-item-1"
				>
					<img className="contact-img" src={linkedin}></img>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="mailto:tyler.strong1@gmail.com?subject=Portfolio Website"
					className="contact-item-2"
				>
					<img className="contact-img" src={gmail}></img>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/imaspork"
					className="contact-item-3"
				>
					<img className="contact-img" src={github}></img>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://twitter.com/imtylre"
					className="contact-item-4"
				>
					<img className="contact-img" src={twitter}></img>
				</a>
			</div>
		</section>
	);
};

export default Contact;
