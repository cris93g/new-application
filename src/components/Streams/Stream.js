import React, { Component } from "react";
import axios from "axios";

class Stream extends Component {
	state = {
		streams: []
	};
	componentDidMount() {
		axios
			.get(`/api/topstreams`)
			.then(response => this.setState({ streams: response.data.streams }));
	}

	render() {
		console.log(this.state.streams);
		const { streams } = this.state;
		const streamsDisplay = streams.map(stream => {
			return (
				<div>
					<p key={stream._id}>{stream.game}</p>
					<img src={stream.preview.medium} />
				</div>
			);
		});
		return <div className="">{streamsDisplay}</div>;
	}
}

export default Stream;
