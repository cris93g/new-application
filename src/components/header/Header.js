import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h3 className="title"> Socialize</h3>
        <div className="links">
          <Link to="/youtube">
            <div className="mylinks">Youtube</div>
          </Link>
          <Link to="/twitch">
            <div className="mylinks">twitch</div>
          </Link>
        </div>
      </div>
    );
  }
}
