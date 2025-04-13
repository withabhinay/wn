import React from 'react'
import axios from 'axios';
import { Search, PlusCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../../config';
export default function PersonalJournals  () {
    const [journals, setJournals] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    
    useEffect( () => {
        // fetchUserDetails();
        fetchJournals();
      }, []);
    
      const fetchJournals = async () => {
        const token = localStorage.getItem("dbtoken");
        console.log("inside fetch journal",token);
        const response = await axios.post(`${BACKEND_URL}/api/all_journals`,
           {
            Token: token
          }
        )
        console.log("reposnee for journals",response)
        setJournals(response.data.Journals)
      }
      
      const handleNewJournal = () => {
        navigate('/postingjournal');
      };
      
      const filteredJournals = journals.filter(journal =>
        journal.Title.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="gap-6 min-h-[60vh] w-[80%] justify-center ">
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search journals..."
                className="w-full bg-gray-700 text-white px-4 py-2 pl-10 rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={handleNewJournal}
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <PlusCircle size={20} />
              New Journal
            </button>
          </div>

          <div className="space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 400px)' }}>
            {filteredJournals.length > 0 ? (
              filteredJournals.map(journal => (
                <div key={journal.id} className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{journal.Title}</h3>
                  <p className="text-gray-400">{journal.Description}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No journals found.</p>
            )}
          </div>

        </div>
      </div>
  )
}
