import React from "react";
import Album from "./Album";

export default function AllAlbums(props) {
  return (
    <div id="albums" className="row wrap">
      <Album data={props.data} />
    </div>
  );
}
