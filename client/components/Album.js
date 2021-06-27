import React from "react";
import { Link } from "react-router-dom";

export default function Album(props) {
  return (
    <>
      {props.data.map((album) => {
        return (
          <div key={album.id} className="album">
            <Link to={`/albums/${album.id}`}>
              <img src={album.artworkUrl} />
              <p>{album.name}</p>
              <small>{album.artist.name}</small>
            </Link>
          </div>
        );
      })}
    </>
  );
}
