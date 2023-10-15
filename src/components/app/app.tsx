import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageRoute } from '../../constants/const';
import Catalog from '../../pages/catalog/catalog';
import Product from '../../pages/product/product';
import PageNotFound from '../../pages/page-not found/page-not-found';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={PageRoute.Catalog} element={<Catalog />} />
      <Route path={PageRoute.Product} element={<Product />}>
        <Route path=':camerasId' element={<Product />} />
      </Route>
      <Route path={PageRoute.PageNotFound} element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
