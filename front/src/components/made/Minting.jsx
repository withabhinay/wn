import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle } from '../ui/dialog';
import { useToast } from '../../hooks/use-toast';
import axios from 'axios';

export default function StreakNFTMint() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleMint = async () => {
    if (!input) {
      toast({ title: "Please enter a valid email or wallet address." });
      return;
    }

    try {
      setIsLoading(true);
      const authToken = localStorage.getItem("dbtoken");

      const response = await axios.post(
        'https://example.com/api/mint_streak_nft',
        { addressOrEmail: input },
        {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        }
      );

      toast({
        title: "Success",
        description: response.data.message || "NFT Minted Successfully!",
        duration: 4000
      });
    } catch (error) {
      toast({
        title: "Minting Failed",
        description: error.response?.data?.message || "Something went wrong!",
        variant: "destructive",
        duration: 4000
      });
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  return (
    <div className=" p-4 rounded-lg  flex flex-col items-center  max-w-xs mx-auto space-y-4">
      <h3 className="text-lg font-semibold text-center">🔥 7 Days Streak NFT</h3>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-purple-600 hover:bg-purple-700 w-full">Mint</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Email or Wallet Address</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <Input
              type="text"
              placeholder="you@example.com or 0x..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <DialogFooter>
            <Button
              onClick={handleMint}
              className="bg-purple-600 hover:bg-purple-700 w-full"
              disabled={isLoading}
            >
              {isLoading ? "Minting..." : "Confirm Mint"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
