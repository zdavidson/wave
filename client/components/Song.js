import React, { useState, useEffect } from "react";

export default function Song(props) {
  const [selectedRow, setSelectedRow] = useState("");
  const [formerElement, setFormerElement] = useState("");
  const [formerIcon, setFormerIcon] = useState("");

  useEffect(() => {
    if (formerElement == "") {
      return;
    } else {
      formerElement.classList.remove("active");
      formerIcon.style.display = "block";
    }
  });

  const element = document.getElementById(selectedRow);
  const icon = document.getElementById(`icon-${selectedRow}`);
  const audio = props.audio;

  useEffect(() => {
    if (element == null) {
      return;
    } else {
      element.classList.add("active");
      icon.style.display = "none";
      setFormerElement(element);
      setFormerIcon(icon);
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
                id={`icon-${song.id}`}
                onClick={() => {
                  props.setCurrentSong(song);
                  setSelectedRow(song.id);
                  audio.src = song.audioUrl;
                  audio.load();
                  audio.play();
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
