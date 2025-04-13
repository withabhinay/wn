import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Minting from './Minting';
import { BACKEND_URL } from '../../config';
export default function ProfileBar() {
    const [profiledata, setprofiledata] = useState(null);
  
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const dbtoken = localStorage.getItem("dbtoken");
    console.log("Fetching profile", dbtoken);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/profile`, {
        Token: dbtoken
      });
      console.log("Profile response", response.data);
      setprofiledata(response.data.User);  // Set response data to state
    } catch (error) {
      console.error("Error fetching profile", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-2">
  {/* User ID */}
  <div className="bg-gray-800 p-4 text-white rounded-lg justify-center items-center flex flex-col">
  <h2 className="text-lg font-bold mb-2">User ID</h2>
  <p className="text-1xl font-semibold">
    {profiledata ? profiledata._id.slice(0, 20) : 'Loading...'}
  </p>
</div>

  {/* Total Journals */}
  <div className="bg-gray-800 p-4  text-white rounded-lg justify-center items-center flex flex-col">
    <h2 className="text-lg font-bold mb-2">Total Journals</h2>
    <p className="text-1xl font-semibold">{profiledata ? profiledata.Journals.length : 'Loading...'}</p>
  </div>

  {/* Tokens Earned */}
  <div className="bg-gray-800 p-4 text-white rounded-lg justify-center items-center flex flex-col">
    <h2 className="text-lg font-bold mb-2">Tokens Earned</h2>
    <p className="text-1xl font-semibold">{profiledata ? profiledata.Tokens_Earned : 'Loading...'}</p>
  </div>

  {/* Current Streak */}
  <div className="bg-gray-800 p-4  text-white rounded-lg justify-center items-center flex flex-col">
    <h2 className="text-lg font-bold mb-2">Current Streak</h2>
    <p className="text-1xl font-semibold">{profiledata ? profiledata.strike : 'Loading...'}</p>
  </div>

  {/* NFT Minting Button */}
  <div className="bg-gray-800 p-4  text-white rounded-lg  flex items-center justify-center">
    <Minting />
  </div>
</div>

  );
}