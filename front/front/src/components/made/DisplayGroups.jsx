import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../../config';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function DisplayGroups() {
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    const token = localStorage.getItem('dbtoken');
    const response = await axios.post(`${BACKEND_URL}/api/group/all`, {
      Token: token
    });
    setGroups(response.data.groups || []);
  };

  const handleJoinGroup = async () => {
    try {
      const token = localStorage.getItem('dbtoken');
      const response = await axios.post(`${BACKEND_URL}/api/group/join`, {
        Token: token,
        groupId: selectedGroup._id
      });
      alert('Successfully joined the group!');
      setDialogOpen(false);
      setSelectedGroup(null);
    } catch (error) {
      console.error('Error joining group:', error);
      alert('Failed to join the group.');
    }

    alert(response);
  };

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNewGroup = () => {
    navigate('/creategroup');
  };

  return (
    <div className="  gap-6 min-h-[60vh] w-[80%] justify-center ">
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-4">
            <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search groups..."
              className="w-full bg-gray-700 text-white px-4 py-2 pl-10 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Button
            onClick={handleNewGroup}
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <PlusCircle size={20} />
            Create Group
          </Button>
        </div>

        {/* Group Cards */}
        <div className="space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 400px)' }}>
          {filteredGroups.length > 0 ? (
            filteredGroups.map(group => (
              <div key={group._id} className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-1">{group.name}</h3>
                <p className="text-gray-300">Stake: {group.stakeAmount} Note</p>
                <p className="text-gray-300">Max Members: {group.maxMembers}</p>
                <p className="text-gray-300 mb-3">Duration: {group.duration} days</p>

                <Dialog open={dialogOpen && selectedGroup?._id === group._id} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => {
                        setSelectedGroup(group);
                        console.log(group)
                        setDialogOpen(true);
                      }}
                      className="bg-green-500 hover:bg-green-600"
                    >
                      Join
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80">
                    <DialogHeader>
                      <DialogTitle className="text-center text-lg font-bold mb-2">
                        Be ready to enjoy the ride!
                      </DialogTitle>
                      <p className="text-center text-sm text-gray-500">
                        Do you confirm joining <strong>{selectedGroup?.name}</strong>?
                      </p>
                    </DialogHeader>

                    <DialogFooter className="mt-6 flex justify-center">
                      <Button
                        onClick={handleJoinGroup}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Confirm
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No groups found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
