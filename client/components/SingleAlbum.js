import React from "react";
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
  return (
    <div id={singleData.id} className="column">
      <div className="album">
        <a>
          <img src={props.data.artworkUrl} />
          <p>{props.data.name}</p>
          <small>{props.data.artist.name}</small>
        </a>
      </div>
      <Songs data={props.data} />
    </div>
  );
}
