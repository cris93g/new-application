import React, { Component } from "react";

import axios from "axios";

class Searchbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: " ",
			title: " ",
			summary: " ",
			rating: " ",
			image: " ",
			genre: []
		};
	}

	componentWillMount() {
		this.search();
	}

	updateSearchHandler = event => {
		this.search(this.refs.query.value);
	};

	search(query = "stranger-things") {
		const url = `https://api.twitch.tv/kraken/search/channels?query=${query}&client_id=gue31zwe29qzw9mlr2xmcje34ktit2`;

		axios.get(url).then(response => {
			this.setState({
				title: response.data.name,
				summary: response.data.summary,
				rating: response.data.rating.average,
				image: response.data.image.medium,
				genre: response.data.genres
			});
		});
	}

	render() {
		let editedSummary = this.state.summary.replace(
			/(<p>|<b>|<\/p>|<\/b>)/g,
			""
		);
		let spiltGenre = this.state.genre.join(", ");

		return (
			<div>
				<input type="text" ref="query" onChange={this.updateSearchHandler} />
				<p>showTitle={this.state}</p>
				/> */}
				{/* <AddButton showTitle={this.state.title} showGenre={spiltGenre} /> */}
			</div>
		);
	}
}

export default Searchbar;
