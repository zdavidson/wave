import React from "react";
import Song from "./Song";
export default function Songs(props) {
  return (
    <table id="songs">
      <tbody>
        <tr class="gray">
          <td />
          <td>#</td>
          <td>Name</td>
          <td>Artist</td>
          <td>Genre</td>
        </tr>
        <Song />
        <Song />
        <Song />
      </tbody>
    </table>
  );
}
