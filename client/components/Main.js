import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Player from "./Player";
import AllAlbums from "./AllAlbums";
import SingleAlbum from "./SingleAlbum";

export default function Main() {
  return (
    <Router>
      <div id="main" className="row container">
        <Sidebar />

        <div className="container">
          <Route exact path="/">
            <AllAlbums />
          </Route>
          <Route exact path="/albums">
            <AllAlbums />
          </Route>
          <Route path="/albums/:albumId" component={SingleAlbum}></Route>
        </div>

        <Player />
      </div>
    </Router>
  );
}
