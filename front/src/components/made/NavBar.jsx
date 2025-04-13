import React, { useState, useEffect } from 'react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { Button } from '../ui/button';

export default function NavBar() {
  const { user, authenticated, ready, logout } = usePrivy();
  const { wallets } = useWallets();
  const wallet = wallets[0];
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (ready && authenticated && user) {
      const emailAccount = user.linkedAccounts.find(
        (account) => account.type === 'email'
      );
      if (emailAccount) {
        setEmail(emailAccount.address);
      }
    }
  }, [ready, authenticated, user]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background flex text-white bg-black justify-center item-center px-5">
      <div className="container flex h-16 items-center justify-between py-4 rounded-2xl">
        <img src="logo.svg" alt="Wellnotes Logo" width={90} height={10} />
        <div className="flex items-center gap-4 text-white">
          {/* Show email if available */}
          {email && <span>{email}</span>}

          {/* Show wallet address if available */}
          {wallet?.address && <span>{wallet.address}</span>}

          <span className="font-semibold">
            <Button onClick={logout}>Logout</Button>
          </span>
        </div>
      </div>
    </header>
  );
}
