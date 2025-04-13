import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Routes from './routes';
import { Toaster } from 'react-hot-toast'; // ✅ Import Toaster

function App() {
  const router = createBrowserRouter(Routes);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ Add Toaster */}
    </>
  );
}

export default App;
