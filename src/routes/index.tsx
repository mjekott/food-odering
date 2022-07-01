import { Routes, Route } from 'react-router-dom';

import Layout from 'src/components/layout';
import { Home } from '~/pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
