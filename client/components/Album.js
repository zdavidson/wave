import React from "react";

export default function Album(props) {
  console.log("Data:", props.data);
  return (
    <div class="album">
      <a>
        <img src={props.data} />
        <p>{props.name}</p>
        <small>{props.artist}</small>
      </a>
    </div>
  );
}
