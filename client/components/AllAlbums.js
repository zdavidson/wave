import React from "react";
import Album from "./Album";

export default class AllAlbums extends React.Component {
  render() {
    return (
      <div id="albums" class="row wrap">
        <Album />
        <Album />
      </div>
    );
  }
}
