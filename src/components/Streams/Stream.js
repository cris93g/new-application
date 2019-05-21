import React, { Component } from "react";
import axios from "axios";
import "./stream.css";
import { Link } from "react-router-dom";
import { getStreams } from "../../redux/ducks/twitchReducer";
import { connect } from "react-redux";
class Stream extends Component {
	state = {
		streams: []
	};
	componentDidMount() {
		this.props.getStreams();
	}

	render() {
		console.log(this.props.twitchReducer.streams);
		const { streams } = this.props.twitchReducer;
		console.log(streams);
		const streamsDisplay = streams.map(stream => {
			return (
				<div className="cards" key={stream._id}>
					<Link to={`twitch/${stream.channel.display_name}`}>
						<img
							className="cardPic"
							src={stream.preview.medium}
							alt="stream-cards"
						/>
					</Link>
					<h3>{stream.game}</h3>
					<p>{stream.stream_type}</p>
				</div>
			);
		});
		return (
			<div className="cardsD">
				<p>Top Twitch Streams</p>
				<br />
				{streamsDisplay}
			</div>
		);
	}
}

const mapStateToProps = state => state;
export default connect(
	mapStateToProps,
	{ getStreams }
)(Stream);
