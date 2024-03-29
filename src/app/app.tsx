import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Catalog from 'src/pages/catalog';
import Product from 'src/pages/product';
import {AppRoutes} from 'src/shared/constans/routes';
import Basket from 'src/pages/basket';
import ErrorPage from 'src/pages/page404/errorPage';
import CamerasList from 'src/widgest/cameras/cameras-list';

const App = () => {


  const router = createBrowserRouter([
    {
      path: `${AppRoutes.Main}`,
      element: <Catalog />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: AppRoutes.Main,
          element: <CamerasList />
        }
      ]
    },
    {
      path: '/product/:prod',
      element: <Product />,
    },
    {
      path: AppRoutes.Basket,
      element: <Basket />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );

};

export default App;
function UseParams() {
  throw new Error('Function not implemented.');
}

