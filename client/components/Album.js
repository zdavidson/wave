import React from "react";

export default class Album extends React.Component {
  render() {
    return (
      <div class="album">
        <a>
          <img src={this.props.albumImg} />
          <p>{this.props.name}</p>
          <small>{this.props.artist}</small>
        </a>
      </div>
    );
  }
}
