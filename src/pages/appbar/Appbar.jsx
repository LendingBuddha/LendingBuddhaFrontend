import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Appbar = ({ lenderName }) => {
  const [showCard, setShowCard] = useState(false);

  const handleIconClick = () => {
    setShowCard(!showCard);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 border border-white rounded-lg mt-2 ">
      <div className="flex items-center">
        <span className="ml-2 text-white font-bold">{lenderName}</span>
      </div>
      <div className="flex justify-between text-white flex-grow mx-4"></div>
      <div className="flex items-center">
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-gray-900 border border-white p-2 text-white rounded mr-4"
        />
        {/* <AccountCircleIcon onClick={handleIconClick} className="text-white cursor-pointer" /> */}
        {showCard && (
          <div className="absolute top-16 right-2 w-48 p-4 bg-black text-white rounded-lg border border-gray-400 shadow-lg z-50">
            <div className="user-info">
              <p>Name: {lenderName}</p>
              <p>Mobile: 123-456-7890</p>
              <button className="flex w-full p-2 bg-white text-black rounded mt-2 justify-center hover:bg-red-700">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appbar;
