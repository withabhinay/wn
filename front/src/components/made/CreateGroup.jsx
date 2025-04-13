import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import ProfileBar from './ProfileBar';
import Footerr from './Footerr';
import { Button } from '../ui/button';
import { BACKEND_URL } from '../../config';
import { useNavigate } from 'react-router-dom';

export default function CreateGroup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    duration: '',
    stakeAmount: '',
    maximumMember: '',
    mininumMember: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const token = localStorage.getItem("dbtoken");

    try {
      const response = await axios.post(`${BACKEND_URL}/api/group/create`, {
        Token: token,
        ...formData
      });
      alert("Group Created Successfully!");
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating group:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <NavBar />
      <main className="flex-grow py-5 px-5 container mx-auto">
        <ProfileBar />
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 mt-5 rounded-lg">
          <h2 className="text-xl font-bold text-white mb-4  text-center">Create a New Group</h2>
          <div className="space-y-4">
            <input
              name="name"
              placeholder="Group Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white w-full p-2"
              required
            />
            <input
              type="number"
              name="duration"
              placeholder="Duration (in days)"
              value={formData.duration}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white w-full p-2"
              required
            />
            <input
              type="number"
              name="stakeAmount"
              placeholder="Stake Amount"
              value={formData.stakeAmount}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white w-full p-2"
              required
            />
            <input
              type="number"
              name="maximumMember"
              placeholder="Maximum Members"
              value={formData.maximumMember}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white w-full p-2"
              required
            />
            <input
              type="number"
              name="mininumMember"
              placeholder="Minimum Members"
              value={formData.mininumMember}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white w-full p-2"
              required
            />
            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 p-2"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Group...' : 'Create Group'}
            </Button>
          </div>
        </form>
      </main>
      
    </div>
  );
}
