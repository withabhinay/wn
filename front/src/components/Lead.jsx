
import { usePrivy } from '@privy-io/react-auth'
import Landing from './Landing';
import Dashboard from './Dashboard';

export default function Lead() {
  const { ready, user, authenticated, login, logout } = usePrivy();
  
  // Show loading screen while auth status is loading
  if (!ready) {
    return <div>Loading...</div>;
  }

  // Show alternate page if not logged in
  if (!authenticated) {
    return (
      <div className="not-logged-in">
       <Landing/>
        <button onClick={login}>Login</button>
      </div>
    );
  }

  // Show main landing page if logged in
  return (
    <>
      <Dashboard/>
    </>
  );
}

