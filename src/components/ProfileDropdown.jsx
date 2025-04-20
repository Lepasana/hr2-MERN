import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cog6ToothIcon, ArrowRightOnRectangleIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { AuthContext } from '../App'; // ✅ Make sure path is correct

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext); // ✅ Access context
  const role = 'Admin'; // hardcoded for now

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false); // ✅ update state without reloading
    navigate('/login');
  };

  return (
    <div className="relative ml-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white shadow px-4 py-2 rounded-full hover:bg-gray-100"
      >
        <UserCircleIcon className="h-6 w-6 text-gray-600" />
        <span className="text-sm font-medium">{role}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-10">
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => alert('Settings clicked!')} // Replace later with real page
          >
            <Cog6ToothIcon className="h-4 w-4 mr-2" />
            Settings
          </button>
          <div className="px-4 py-2 text-sm text-gray-500 border-t">Role: {role}</div>
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            onClick={handleLogout}
          >
            <ArrowRightOnRectangleIcon className="h-4 w-4 mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
