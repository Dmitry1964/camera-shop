import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageRoute } from '../../constants/const';
import Catalog from '../../pages/catalog';


const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={PageRoute.Catalog}>
        <Route index element={<Catalog />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
