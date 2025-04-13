import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Providers from './providers/PrivyProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Providers>
        <App />
      </Providers>
    
  </StrictMode>
);
