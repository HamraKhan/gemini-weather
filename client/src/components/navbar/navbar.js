import React from "react";
import { FaMapMarkerAlt, FaPlus, FaList } from 'react-icons/fa';
import '../../styles/components/navbar.css';

const Navbar = () => {
    return (
      <div className="navbar-container">
        <FaMapMarkerAlt className="dashboard-icon" />
        <FaPlus className="location-icon" />
        <FaList className="article-icon" />
      </div>
    )
}

export default Navbar;