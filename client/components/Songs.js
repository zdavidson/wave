import React from "react";
import Song from "./Song";
export default function Songs(props) {
  return (
    <table id="songs">
      <tbody>
        <tr className="gray">
          <td />
          <td>#</td>
          <td>Name</td>
          <td>Artist</td>
          <td>Genre</td>
        </tr>
        <Song data={props.data} />
      </tbody>
    </table>
  );
}
