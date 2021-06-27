import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Player from "./Player";
import AllAlbums from "./AllAlbums";
import SingleAlbum from "./SingleAlbum";

export default function Main() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState({});

  useEffect((albumId) => {
    async function handleClick() {
      await fetch(`/api/albums/${albumId}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setSelectedAlbum(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, []);
  // Use React Router for the paths

  return (
    <div id="main" className="row container">
      <Sidebar />
      <Router>
        <div className="container">
          <Route exact path="/">
            <AllAlbums />
          </Route>
          <Route path="/albums">
            <AllAlbums />
          </Route>
          <Route path="/single-album">
            <SingleAlbum />
          </Route>
        </div>
      </Router>
      <Player />
    </div>
  );

  // if (selectedAlbum["songs"] === undefined) {
  //   return (
  //     <div id="main" className="row container">
  //       <Sidebar />
  //       <div className="container">
  //         <AllAlbums data={items} clickHandler={clickHandler} />
  //       </div>
  //       <Player />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div id="main" className="row container">
  //       <Sidebar />
  //       <div className="container">
  //         <SingleAlbum data={selectedAlbum} />
  //       </div>
  //       <Player />
  //     </div>
  //   );
  // }
}
