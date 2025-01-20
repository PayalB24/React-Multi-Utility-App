import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid">
      <Link className="navbar-brand mt-2 mb-3" to="/"><strong><span style={{ color: '#343A40' }}>Textify</span></strong></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active m-2" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active m-2" to="/Darkmode">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active m-2" to="/Counter">Counter</Link>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Background Color
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item hh" onClick={props.setcolor}>Dark Imperial Purple</button></li>
                <li><button className="dropdown-item hh" onClick={props.setcolor2}>Shadow Plum</button></li>
                <li><button className="dropdown-item hh" onClick={props.setcolor3}>Dark Moss Green</button></li>
              </ul>
            </li>

            <li className="nav-item my-2 mx-2">
              <div className="form-check form-switch">
                <input className="form-check-input mt-3" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label mt-2" htmlFor="flexSwitchCheckDefault" id="Mode">Dark Mode</label>
              </div>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
  mode: PropTypes.string,
};
