import React from "react";
import { Link } from "react-router-dom";

const HomeLink = props => {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          <img src="../images/navbar.png" width="100%" height="80vh" alt="" />
        </Link>
      </nav>
    </div>
  );
};

export default HomeLink;
