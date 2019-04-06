import React, { Component } from "react";
import { connect } from "react-redux";
import { getStreams } from "../../redux/ducks/twitchReducer";
import "./Home.css";
import Stream from "../../components/Streams/Stream";
class Home extends Component {
  // componentDidMount() {
  //   this.props.getStreams();
  // }
  render() {
    return (
      <div className="Home">
        <Stream />
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
