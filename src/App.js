import React, { Component } from "react";

import "./App.css";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
// import Header from "./components/header/Header";
// import SideNav from "./components/sideNav/SideNav";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <SideNav /> */}
          {routes}
        </div>
      </Provider>
    );
  }
}

export default App;
