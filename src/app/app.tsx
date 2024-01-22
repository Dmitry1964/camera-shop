import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Catalog from 'src/pages/catalog';


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Catalog />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  );

};

export default App;
