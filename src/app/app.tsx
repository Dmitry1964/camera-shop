import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Catalog from 'src/pages/catalog';
import Product from 'src/pages/product';
import {RoutesPaths} from 'src/app/routes/routes';
import Basket from 'src/pages/basket';

const App = () => {

  const router = createBrowserRouter([
    {
      path: RoutesPaths.main,
      element: <Catalog />,
    },
    {
      path: RoutesPaths.product,
      element: <Product />,
    },
    {
      path: RoutesPaths.basket,
      element: <Basket />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );

};

export default App;
