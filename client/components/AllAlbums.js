import React from "react";
import Album from "./Album";

export default function AllAlbums(props) {
  return (
    <div id="albums" className="row wrap">
      {props.data.map((album) => {
        return (
          <div key={album.id} className="album">
            <a>
              <img src={album.artworkUrl} />
              <p>{album.name}</p>
              <small>{album.artist.name}</small>
            </a>
          </div>
        );
      })}
    </div>
  );
}
