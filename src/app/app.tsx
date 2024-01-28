import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Catalog from 'src/pages/catalog';
import Product from 'src/pages/product';
import {AppRoutes} from 'src/shared/constans/routes';
import Basket from 'src/pages/basket';

const App = () => {

  const router = createBrowserRouter([
    {
      path: AppRoutes.Main,
      element: <Catalog />,
    },
    {
      path: AppRoutes.Product,
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
