import React from "react";
import Sidebar from "./Sidebar";
import Player from "./Player";
import AllAlbums from "./AllAlbums";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = [
      {
        id: 1,
        name: "No Dummy",
        artworkUrl: "default-album.jpg",
        artistId: 1,
        artist: {
          id: 1,
          name: "The Crash Test Dummies",
        },
      },
      {
        id: 2,
        name: "I React to State",
        artworkUrl: "default-album.jpg",
        artistId: 1,
        artist: {
          id: 1,
          name: "The Crash Test Dummies",
        },
      },
    ];
  }

  render() {
    return (
      <div id="main" className="row container">
        <Sidebar />
        <div className="container">
          <AllAlbums
            name1={this.state[0].name}
            albumImg1={this.state[0].artworkUrl}
            artist1={this.state[0].artist.name}
            name2={this.state[1].name}
            albumImg2={this.state[1].artworkUrl}
            artist2={this.state[1].artist.name}
          />
        </div>
        <Player />
      </div>
    );
  }
}
