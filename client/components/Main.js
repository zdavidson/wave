import React from "react";
import Sidebar from "./Sidebar";
import Player from "./Player";
import AllAlbums from "./AllAlbums";

export default class Main extends React.Component {
  render() {
    return (
      <div id="main" className="row container">
        <Sidebar />
        <div className="container">
          <AllAlbums />
        </div>
        <Player />
      </div>
    );
  }
}
