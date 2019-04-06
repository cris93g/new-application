const { getTrending } = require("../controller/youtubeController");
const { getTopStreams } = require("../controller/twitchController");

module.exports = app => {
  app.get("/api/trending", getTrending);
  app.get("/api/topstreams", getTopStreams);
};
