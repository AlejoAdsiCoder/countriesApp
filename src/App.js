import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import Nav from './components/menu/Nav';
import Countries from './components/countries/Countries';
import Country from './components/countries/Country';
// import SelectSearch from './components/selectSearch/SelectSearch';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:name" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
