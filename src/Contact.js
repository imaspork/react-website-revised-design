import React from "react";
import github from "./github.png";
import gmail from "./gmail.png";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";
import resume from "./resume.png";
import Tyler_Strong_Resume_2021 from "./Tyler_Strong_Resume_2021.pdf";

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
					<img
						className="contact-img"
						src={linkedin}
						alt="linkedIn"
					></img>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="mailto:tyler.strong1@gmail.com?subject=Portfolio Website"
					className="contact-item-2"
				>
					<img className="contact-img" src={gmail} alt="gmail"></img>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/imaspork"
					className="contact-item-3"
				>
					<img
						className="contact-img"
						src={github}
						alt="github"
					></img>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://twitter.com/imtylre"
					className="contact-item-4"
				>
					<img
						className="contact-img"
						src={twitter}
						alt="twitter"
					></img>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={Tyler_Strong_Resume_2021}
					className="contact-item-5"
				>
					<img
						className="contact-img"
						src={resume}
						alt="Resume"
					></img>
				</a>
			</div>
		</section>
	);
};

export default Contact;
