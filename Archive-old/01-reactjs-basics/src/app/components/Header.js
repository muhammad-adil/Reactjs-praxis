import React, { Component } from "react";

export const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        LOGO
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {props.homeLink}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 3
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
