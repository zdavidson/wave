import React, { useState, useEffect } from "react";

const audio = document.createElement("audio");
const startAudio = (audioUrl) => {
  audio.src = audioUrl;
  audio.load();
  audio.play();
};

export default function Song(props) {
  const [currentSong, setCurrentSong] = useState();
  const [selectedRow, setSelectedRow] = useState("");
  const [formerElement, setFormerElement] = useState("");

  useEffect(() => {
    if (formerElement == "") {
      return;
    } else {
      formerElement.classList.remove("active");
    }
  });

  useEffect(() => {
    const element = document.getElementById(selectedRow);
    if (element == null) {
      return;
    } else {
      element.classList.add("active");
      setFormerElement(element);
    }
  });

  const artistName = props.data.artist.name;

  return (
    <>
      {props.data.songs.map((song) => {
        return (
          <tr key={song.id} id={song.id}>
            <td>
              <i
                onClick={() => {
                  setCurrentSong(song);
                  setSelectedRow(song.id);
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
