const { getTrending } = require("../controller/youtubeController");
const {
	getTopStreams,
	fetchQueryChannels
} = require("../controller/twitchController");

module.exports = app => {
	app.get("/api/trending", getTrending);
	app.get("/api/topstreams", getTopStreams);
	app.post("/api/search", fetchQueryChannels);
};
