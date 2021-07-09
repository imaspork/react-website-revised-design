import "./App.css";
import FlashyBox from "./FlashyBox";
import tylerbig from "./tylerbig.png";

function Home() {
	return (
		<div className="Home">
			<div id="home-wrapper">
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
							Founded in 1998, Tyler Strong development group has
							been working with front end development since 2016.
							Starting out with learning Python in his dorm room,
							he quickly switched to learning how to develop
							websites. He took a class for HTML and CSS in 2017
							and has been writing them ever since. Later in 2019,
							he learned JavaScript. Tyler is proud to say he has
							extensive knowledge of HTML5 and CSS, and is a
							strong advocate for flex box usage and CSS grid. In
							the past year, Tyler has done the following.{" "}
							<b>Learned the basics of React.JS!</b> He has
							deployed a bot to{" "}
							<b>AWS servers configured with node.</b>
							This <b>bot utilizes a private API</b> to fetch in
							game market prices, and will suggest the best course
							of actions to users for their task. He learned the
							amazing tool that is <b>CSS grid.</b> Configured a
							server with Nginx for a personal project.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
