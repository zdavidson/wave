import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Player from "./Player";
import AllAlbums from "./AllAlbums";
import SingleAlbum from "./SingleAlbum";

export default function Main() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState({});

  useEffect(() => {
    async function fetchData() {
      await fetch("/api/albums")
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    fetchData();
  }, []);

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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (isLoaded) {
    return (
      <div id="main" className="row container">
        <Sidebar />
        <Router forceRefresh={false}>
          <div className="container">
            <Route exact path="/">
              <AllAlbums data={items} />
            </Route>
            <Route path="/albums">
              <AllAlbums data={items} />
            </Route>
            <Route path="/:id">
              <SingleAlbum data={selectedAlbum} />
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
}
