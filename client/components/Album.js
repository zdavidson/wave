import React from "react";

export default class Album extends React.Component {
  render() {
    return (
      <div class="album">
        <a>
          <img src="default-album.jpg" />
          <p>ALBUM 1</p>
          <small>Artist Name</small>
        </a>
      </div>
    );
  }
}
