import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Player from "./Player";
import AllAlbums from "./AllAlbums";
import SingleAlbum from "./SingleAlbum";

export default function Main() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (isLoaded) {
    return (
      <div id="main" className="row container">
        <Sidebar />
        <div className="container">
          {/* <AllAlbums data={items} /> */}
          <SingleAlbum data={items} />
        </div>
        <Player />
      </div>
    );
  }
}
