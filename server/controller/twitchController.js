require("dotenv").config();
const axios = require("axios");

axios
	.get(
		`https://api.twitch.tv/kraken/streams?client_id=gue31zwe29qzw9mlr2xmcje34ktit2&limit=5`
	)
	.then(response => {
		streams = response.data;
		return streams;
	});
let getTopStreams = (req, res) => {
	res.status(200).send(streams);
};

module.exports = {
	getTopStreams
};
