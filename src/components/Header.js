import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click on column headers to filter by heading or search for a name.</p>
      </div>
    )
  }

export default Header;
