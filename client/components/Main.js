import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Player from "./Player";
import AllAlbums from "./AllAlbums";
import SingleAlbum from "./SingleAlbum";

export default function Main() {
  const [currentSong, setCurrentSong] = useState({});
  console.log(currentSong);
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
          <Route
            path="/albums/:albumId"
            render={(routeProps) => (
              <SingleAlbum {...routeProps} setCurrentSong={setCurrentSong} />
            )}
          ></Route>
        </div>

        <Player currentSong={currentSong} />
      </div>
    </Router>
  );
}
