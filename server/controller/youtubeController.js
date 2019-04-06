require("dotenv").config();
const axios = require("axios");

axios
  .get(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyAzyOmKDvYn7eGtSW7KjPxDgkISmMJ3nFg`
  )
  .then(response => {
    trending = response.data;
    // console.log(trending);
    return trending;
  });
let getTrending = (req, res) => {
  res.status(200).send(trending);
  //   console.log(trending);
};

module.exports = {
  getTrending
};
