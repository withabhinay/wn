import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Trash2, Rocket } from 'lucide-react';
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

export default function OwnedGroups() {
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    fetchOwnedGroups();
  }, []);

  const fetchOwnedGroups = async () => {
    const token = localStorage.getItem('dbtoken');
    try {
      const response = await axios.post(`${BACKEND_URL}/api/group/owner`, {
        Token: token
      });
      const groupsData = Array.isArray(response.data.groups) ? response.data.groups : [];
      setGroups(groupsData);
    } catch (error) {
      console.error('Error fetching owned groups:', error);
      setGroups([]);
    }

  };
  const handleDeleteGroup = async () => {
    const token = localStorage.getItem('dbtoken');
    try {
      console.log("from del grp", token );
      console.log("from del grp", selectedGroup._id );
      const response = await axios.post(`${BACKEND_URL}/api/group/end`, {
        Token: token,
        groupId: selectedGroup._id
      });
      alert('Group deleted successfully!');
      console.log(response);
      setGroups(prev => prev.filter(group => group._id !== selectedGroup._id));
      setDialogOpen(false);
      setSelectedGroup(null);
    } catch (error) {
      console.error('Error deleting group:', error);
      alert('Failed to delete group.');
    }
  };

  const handleActivateGroup = async (groupId) => {
    const token = localStorage.getItem('dbtoken');
    try {
      await axios.post(`${BACKEND_URL}/api/group/active`, {
        Token: token,
        groupId
      });
      alert('Group activated successfully!');
      setGroups(prev =>
        prev.map(group =>
          group._id === groupId ? { ...group, active: true } : group
        )
      );
    } catch (error) {
      console.error('Error activating group:', error);
      alert('Failed to activate group.');
    }
  };

  const filteredGroups = groups.filter(group =>
    group.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gap-6 min-h-[60vh] w-[80%] justify-center">
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
        </div>

        <div className="space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 400px)' }}>
          {filteredGroups.length > 0 ? (
            filteredGroups.map(group => (
              <div key={group._id} className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
                <p className="text-gray-400">Stake: {group.stakeAmount}</p>
                <p className="text-gray-400">Status: {group.active ? 'Active' : 'Inactive'}</p>

                <div className="flex flex-wrap gap-3 mt-3">
                  {/* Activate Button */}
                  <Button
                    onClick={() => handleActivateGroup(group._id)}
                    className={`flex items-center gap-2 ${group.active ? 'bg-blue-400 hover:bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'}`}
                    disabled={group.active}
                  >
                    <Rocket size={16} />
                    {group.active ? 'Already Active' : 'Activate Group'}
                  </Button>

                  {/* Delete Button */}
                  <Dialog open={dialogOpen && selectedGroup?._id === group._id} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="destructive"
                        className="flex items-center gap-2"
                        onClick={() => {
                          setSelectedGroup(group);
                          setDialogOpen(true);
                        }}
                      >
                        <Trash2 size={16} />
                        Delete Group
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80">
                      <DialogHeader>
                        <DialogTitle className="text-center text-lg font-bold mb-2">
                          Confirm Deletion
                        </DialogTitle>
                        <p className="text-center text-sm text-gray-500">
                          Are you sure you want to delete <strong>{selectedGroup?.name}</strong>? This action cannot be undone.
                        </p>
                      </DialogHeader>

                      <DialogFooter className="mt-6 flex justify-center">
                        <Button
                          onClick={handleDeleteGroup}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Confirm Delete
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
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
