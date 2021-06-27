import React from "react";

export default function Song(props) {
  const artistName = props.data.artist.name;
  return (
    <>
      {props.data.songs.map((song) => {
        return (
          <tr key={song.id}>
            <td>
              <i className="fa fa-play-circle" />
            </td>
            <td>{song.id}</td>
            <td>{song.name}</td>
            <td>{artistName}</td>
            <td>{song.genre}</td>
          </tr>
        );
      })}
    </>
  );
}
