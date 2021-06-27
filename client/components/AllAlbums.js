import React, { useState, useEffect } from "react";
import Album from "./Album";

export default function AllAlbums(props) {
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
      <div id="albums" className="row wrap">
        <Album data={items} />
      </div>
    );
  }
}
