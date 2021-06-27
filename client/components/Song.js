import React, { useState, useEffect } from "react";

const audio = document.createElement("audio");
const startAudio = (audioUrl) => {
  audio.src = audioUrl;
  audio.load();
  audio.play();
};

const makeActive = (songId) => {
  document.getElementById(songId).classList.add("active");
};

const makeInactive = (songId) => {
  if (songId !== 0) {
    document.getElementById(songId).classList.remove("active");
  } else {
    console.log("no previous song");
  }
};

export default function Song(props) {
  let [currentSong, setCurrentSong] = useState({});
  let formerSongId;

  const artistName = props.data.artist.name;

  return (
    <>
      {props.data.songs.map((song) => {
        return (
          <tr key={song.id} id={song.id}>
            <td>
              <i
                onClick={() => {
                  formerSongId = currentSong.id || 0;
                  makeInactive(formerSongId);
                  currentSong = song;
                  makeActive(currentSong.id);
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
