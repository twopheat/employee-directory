import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1 className="row justify-content-center"><img className="col-md-4" alt="Employee Directory" src="/empdir.png"></img></h1>
        <h5>Click on column headers to filter by heading or search for a name.</h5>
      </div>
    )
  }

export default Header;
