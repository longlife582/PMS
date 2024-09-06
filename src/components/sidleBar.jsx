import React from "react";
import "../style/sidebar.css";
import Avatar from "../assets/user.avif";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="top-side-bar">
        <div className="logo-div">
          <h3 className="logo">
            P<span>M</span>S
          </h3>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/home">
            <i className="bx bxs-dashboard"></i>
            <span className="nav-items active-tab">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/tenant">
            <i className="bx bxs-user"></i>
            <span className="nav-items">Tenants</span>
          </Link>
        </li>
        <li>
          <Link to="/property">
            <i className="bx bxs-building-house"></i>
            <span className="nav-items">Properties</span>
          </Link>
        </li>
        <li>
          <Link to="/staff">
            <i className="bx bxs-user-account"></i>
            <span className="nav-items">Staff</span>
          </Link>
        </li>
        <li>
          <Link to="/payment">
            <i className="bx bx-wallet"></i>
            <span className="nav-items">Payment</span>
          </Link>
        </li>
        <li>
          <Link to="/maintance">
            <i className="bx bxs-car-mechanic"></i>
            <span className="nav-items">Maintenance</span>
          </Link>
        </li>
        <li>
          <Link to="/message">
            <i className="bx bxs-message"></i>
            <span className="nav-items">Messages</span>
          </Link>
        </li>
      </ul>

      <div className="logout-space">
        <i className="bx bx-log-out"></i>
        <p className="logout">Logout</p>
      </div>

      <div className="user">
        <div className="user-img">
          <img className="user-img" src={Avatar} />
        </div>
        <div>
          <p className="name">Client A</p>
          <p>Admin Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
