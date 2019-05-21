require("dotenv").config();
const axios = require("axios");

axios
	.get(
		`https://api.twitch.tv/kraken/streams?client_id=gue31zwe29qzw9mlr2xmcje34ktit2&limit=4`
	)
	.then(response => {
		streams = response.data.streams;
		return streams;
	});
let getTopStreams = (req, res) => {
	res.status(200).send(streams);
};

let fetchQueryChannels = async (req, res) => {
	let { name } = req.body;
	const results = await axios.get(
		`https://api.twitch.tv/kraken/search/channels?query=${name}&client_id=gue31zwe29qzw9mlr2xmcje34ktit2`
	);
	if (results) {
		res.status(200).json(results);
	}
};

module.exports = {
	getTopStreams,
	fetchQueryChannels
};

/*https://api.twitch.tv/kraken/search/channels?query=sodapoppin&client_id=gue31zwe29qzw9mlr2xmcje34ktit2*/
