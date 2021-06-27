import React, { useState, useEffect } from "react";

export default function Player(props) {
  const [playToggle, setPlayToggle] = useState(false);
  const audio = props.audio;
  const playButton = document.getElementById("play-button");
  const currentSong = props.currentSong;

  useEffect(() => {
    if (playButton == null) {
      return;
    } else if (playToggle) {
      playButton.classList.remove("fa-pause-circle");
      playButton.classList.add("fa-play-circle");
    } else {
      playButton.classList.remove("fa-play-circle");
      playButton.classList.add("fa-pause-circle");
    }
  });

  if (props.currentSong.id == undefined) {
    return <div></div>;
  } else {
    return (
      <div id="player-container">
        <div id="player-controls">
          <div className="row center">
            <i className="fa fa-step-backward"></i>
            <i
              id="play-button"
              onClick={() => {
                audio.src = currentSong.audioUrl;
                audio.pause();
              }}
              className="fa fa-pause-circle"
            ></i>
            <i className="fa fa-step-forward"></i>
          </div>
        </div>
      </div>
    );
  }
}
