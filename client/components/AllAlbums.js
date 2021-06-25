import React from "react";
import Album from "./Album";

export default function AllAlbums(props) {
  return (
    <div id="albums" class="row wrap">
      <Album
        name={props.name1}
        albumImg={props.albumImg1}
        artist={props.artist1}
      />
      <Album
        name={props.name2}
        albumImg={props.albumImg2}
        artist={props.artist2}
      />
    </div>
  );
}
