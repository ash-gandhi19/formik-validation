import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div>
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="index.html"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">College Details</div>
          </a>

          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <Link to="/add-college" className="nav-link">
              <span>Add College</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <Link to="/collegelist" className="nav-link">
              <span>College List</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
