import React, { Component } from "react";
// import axios from "axios";
// import { connect } from "react-redux";
// import { getStreams } from "../../redux/ducks/twitchReducer";
import "./Home.css";
import Stream from "../../components/Streams/Stream";
import Header from "../../components/header/Header";
import Trending from "../../components/Trending/Trending";

class Home extends Component {
  // componentDidMount() {
  //   this.props.getStreams();
  // }
  render() {
    return (
      <div className="Home">
        <Header />
        <Stream />
        <Trending />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     streams: state.streams
//   };
// };

export default Home;
