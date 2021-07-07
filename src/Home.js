import "./App.css";
import FlashyBox from "./FlashyBox";
import tylerbig from "./tylerbig.png";

function Home() {
	return (
		<div className="Home">
			<FlashyBox textH1="Front End Developer" />
			<div id="home-wrapper"></div>
			<div id="about-wrapper">
				<div id="about">
					<img src={tylerbig}></img>
					<div className="column">
						<h2>LEADER IN ALL THINGS TYLER</h2>
						<p className="column-text">
							Founded in 1998, Tyler Strong development group has
							been producing front end development since 2016.
							Starting out with learning Python in his dorm room,
							he quickly learned that he wanted to develop
							websites. He took a class for HTML and CSS in 2017
							and has been writing them ever since. Later in 2019,
							he learned JavaScript. Tyler is proud to say he has
							extensive knowledge of HTML5 and CSS, and is a
							strong advocate for flex box usage and CSS grid. In
							the past year, Tyler has done the following:
						</p>
						<span className="year-text">
							Configured an AWS server with node to run an API
							fetching discord bot that tells game users the best
							items to buy for their task at the given time.
						</span>
						<span className="year-text">
							Learned the basics of React.JS
						</span>
						<span className="year-text">Made this website!</span>
						<span className="year-text">
							Learned the intricacies of CSS Grid
						</span>
						<span className="year-text">
							Learned how to host a website website with Nginx
						</span>
						<span className="year-text">& More</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
