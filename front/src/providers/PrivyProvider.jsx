import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }) {
  return (
    <PrivyProvider
      appId="cm9c8k0hg01qpld0n922p7ocs"
      config={{
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'logo.svg',
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}