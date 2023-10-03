import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageRoute } from '../../constants/const';
import Catalog from '../../pages/catalog/catalog';
import Product from '../../pages/product/product';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={PageRoute.Catalog}>
        <Route index element={<Catalog />} />
      </Route>
      <Route path={PageRoute.Product} element={<Product />}>
        <Route path=':camerasId' element={<Product/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
