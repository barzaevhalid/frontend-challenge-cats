import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './pages/main/Main';
import FavoriteCats from './pages/favoriteCats/FavoriteCats';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="favorite-cats/" element={<FavoriteCats />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
