import React, { Component } from "react";
import axios from "axios";
import "./stream.css";
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
    // console.log(this.state.streams);
    const { streams } = this.state;
    const streamsDisplay = streams.map(stream => {
      return (
        <div className="cards" key={stream._id}>
          <img
            className="cardPic"
            src={stream.preview.medium}
            alt="stream-cards"
          />
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

export default Stream;
