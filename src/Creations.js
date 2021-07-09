import React from "react";

const Creations = () => {
	return (
		<section id="creations">
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
	);
};

export default Creations;
