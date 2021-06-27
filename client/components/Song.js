import React from "react";

const audio = document.createElement("audio");

const startAudio = (audioUrl) => {
  audio.src = audioUrl;
  audio.load();
  audio.play();
};

export default function Song(props) {
  const artistName = props.data.artist.name;
  return (
    <>
      {props.data.songs.map((song) => {
        return (
          <tr key={song.id}>
            <td>
              <i
                onClick={() => {
                  startAudio(song.audioUrl);
                }}
                className="fa fa-play-circle"
              />
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
