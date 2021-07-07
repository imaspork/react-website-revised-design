import React from "react";

const FlashyBox = (props) => {
	return (
		<div className="flashy-box">
			<h1>{props.textH1.toUpperCase()}</h1>
		</div>
	);
};

export default FlashyBox;
