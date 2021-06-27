import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <img src="juke.svg" id="logo" />
      <section>
        <h4>
          <Link to="/albums">ALBUMS</Link>
        </h4>
      </section>
    </div>
  );
}
