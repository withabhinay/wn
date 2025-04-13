import React, { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const { user, authenticated, ready, logout } = usePrivy();
  const [email, setEmail] = useState('');
  //const [walletId, setWalletId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (ready && authenticated && user) {
      
      const emailAccount = user.linkedAccounts.find(
        (account) => account.type === 'email'
      );
      if (emailAccount) {
        setEmail(emailAccount.address);
      }
      // Extract wallet ID from linkedAccounts
      // const walletAccount = user.linkedAccounts.find(
      //   (account) => account.type === 'wallet' && account.walletClientType === 'privy'
      // );
      // if (walletAccount && walletAccount.id) {
      //   setWalletId(walletAccount.id);
      //}
    }
  }, [ready, authenticated, user]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background flex justify-center item-center  mb-8">
        <div className="container flex h-16 items-center justify-between py-4 rounded-2xl cursor-pointer" onClick={navigate("/dashboard")}>
            <img src="logo.svg" alt="Wellnotes Logo" width={90} height={10} />
            hiii
        <div className="flex items-center gap-4">  
          <span>{email || 'Loading email...'}</span>
          <span className="font-semibold">
            <Button onClick={logout}>Logout</Button>
          </span>
          </div>
        </div>
    </header>

  );
}
