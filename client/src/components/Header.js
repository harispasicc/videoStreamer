import React from "react";
import { Link } from "react-router-dom";
// import "../index.css";
import GoogleAuth from "./GoogleAuth";
function Header() {
  return (
    <div className="ui secondary pointing menu">
      <div className="item">
        <h1>Streamer</h1>
      </div>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
    </div>

    // <nav className="navbar">
    //   <h1>Streamer</h1>
    //   <Link to="/" className="right-menu">
    //     All Streams
    //   </Link>
    //   <GoogleAuth />
    // </nav>
  );
}

export default Header;
