import React from "react";

export default function Album(props) {
  return (
    <>
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
    </>
  );
}
