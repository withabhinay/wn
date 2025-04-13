import React, { useEffect, useState } from 'react';
import NavBar from './made/NavBar';
import ProfileBar from './made/ProfileBar';
import PersonalJournals from './made/PersonalJournals';
import PostingJournal from './made/PostingJournal';
import DisplayGroups from './made/DisplayGroups';
import Landing from './Landing';
import { BACKEND_URL } from '../config';
import { usePrivy } from '@privy-io/react-auth';
import axios from 'axios';

export default function Dashboard() {
  const { user, ready, authenticated, login } = usePrivy();
  const [dbToken, setDbToken] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auth and backend token setup
  useEffect(() => {
    const authenticate = async () => {
      if (!ready || !user || !authenticated) return;

      try {
        const userId = user.id;
        localStorage.setItem('userId', userId);

        const response = await axios.post(`${BACKEND_URL}/api/auth`, {
          userId: userId,
        });

        console.log('Auth success:', response.data);
        localStorage.setItem('dbtoken', response.data.token);
        setDbToken(response.data.token);
      } catch (err) {
        console.error('Auth failed:', err);
        setError('Authentication failed.');
      } finally {
        setLoading(false);
      }
    };

    authenticate();
  }, [user, ready, authenticated]);

  // Show loading while Privy is preparing
  if (!ready) {
    return <div className="text-center mt-10 text-xl">Loading authentication...</div>;
  }

  // Show landing and login button if not authenticated
  if (!authenticated) {
    return (
      <div className="text-center mt-10">
        <Landing />
        <button
          onClick={login}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    );
  }

  // Show error if authentication to backend fails
  if (!loading && error) {
    return <div className="text-center mt-10 text-red-600">Error: {error}</div>;
  }

  // Show dashboard once everything is ready
  return (
    <div>
      {loading ? (
        <div className="text-center mt-10 text-xl">Loading dashboard...</div>
      ) : (
        <>
          <NavBar />
          <div className="min-h-screen flex flex-col py-8 px-4 mx-10">
            <ProfileBar />
            <div className="flex flex-col lg:flex-row mx-4 lg:mx-10 justify-center items-center">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <PersonalJournals />
                </div>
                <div className="w-full lg:w-1/2">
                  <DisplayGroups />
                </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
