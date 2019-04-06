import React, { Component } from "react";
import axios from "axios";

class Trending extends Component {
  state = {
    trending: []
  };
  componentDidMount() {
    axios.get(`api/trending`).then(response =>
      this.setState({
        trending: response.data.items
      })
    );
  }
  render() {
    // console.log(this.state.trending);
    const { trending } = this.state;
    const displayTrending = trending.map(video => {
      return (
        <div className="cards" key={video.id}>
          <img
            className="cardPic"
            src={video.snippet.thumbnails.medium.url}
            alt="youtube-top trending cards"
          />
          <h3>{video.snippet.localized.title}</h3>
        </div>
      );
    });
    return (
      <div className="cardsD">
        <p>Yotube Trending</p>
        <br />
        {displayTrending}
      </div>
    );
  }
}
export default Trending;
