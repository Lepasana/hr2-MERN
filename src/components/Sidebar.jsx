import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/learning-management">Learning Management</Link></li>
        <li><Link to="/competency-management">Competency Management</Link></li>
        <li><Link to="/training-management">Training Management</Link></li>
        <li><Link to="/succession-planning">Succession Planning</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
