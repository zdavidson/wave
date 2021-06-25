import React from "react";
import Album from "./Album";
import Songs from "./Songs";

export default function SingleAlbum(props) {
  return (
    <div id="single-album" class="column">
      <div className="album">
        <a>
          <img src="default-album.jpg" />
          <p>The Pelicans</p>
          <small>A-Z Productions</small>
        </a>
      </div>
      <Songs />
    </div>
  );
}
