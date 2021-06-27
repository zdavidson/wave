import React, { useState, useEffect } from "react";
import Album from "./Album";
import Songs from "./Songs";

const singleData = {
  id: 3,
  name: "Chain React-ion",
  artworkUrl: "default-album.jpg",
  artistId: 1,
  artist: {
    id: 1,
    name: "The Crash Test Dummies",
  },
  songs: [
    {
      id: 13,
      name: "Set Some State",
      audioUrl:
        "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/01%20Shooting%20Star.mp3",
      genre: "Instrumental",
      albumId: 2,
      artistId: 1,
    },
  ],
};

export default function SingleAlbum(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState({});

  useEffect(() => {
    const thisAlbumId = props.match.params.albumId;
    async function getSelectedAlbum(thisAlbumId) {
      await fetch(`/api/albums/${thisAlbumId}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setSelectedAlbum(result);
            setIsLoaded(true);
          },
          (error) => {
            setError(error);
            setIsLoaded(true);
          }
        );
    }
    getSelectedAlbum(thisAlbumId);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (isLoaded) {
    return (
      <div id={selectedAlbum.id} className="column">
        <div className="album">
          <a>
            <img src={selectedAlbum.artworkUrl} />
            <p>{selectedAlbum.name}</p>
            <small>{selectedAlbum.artist.name}</small>
          </a>
        </div>
        <Songs data={selectedAlbum} setCurrentSong={props.setCurrentSong} />
      </div>
    );
  }
}
