import React from "react";

export default function Album(props) {
  const clickHandler = props.clickHandler;
  return (
    <>
      {props.data.map((album) => {
        return (
          <div key={album.id} id={album.id} className="album">
            <a onClick={clickHandler}>
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
