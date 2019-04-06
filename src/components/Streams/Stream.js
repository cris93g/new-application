import React, { Component } from "react";
import axios from "axios";

class Stream extends Component {
  state = {
    streams: {}
  };
  componentDidMount() {
    axios
      .get(`/api/topstreams`)
      .then(response => this.setState({ streams: { ...response.data } }));
  }

  render() {
    console.log(this.state.streams);
    return <div className="" />;
  }
}

export default Stream;
