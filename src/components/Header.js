import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1 className="col-m-6 align-self-center"><img className="logo" alt="" src="/empdir.png"></img></h1>
        <h5>Click on column headers to filter by heading or search for a name.</h5>
      </div>
    )
  }

export default Header;
