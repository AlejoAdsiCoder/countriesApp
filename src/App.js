import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './menu/Nav';
import Country from './countries/country';

function App() {
  return (
    <div className="App">
      <Nav />
      <Country />
    </div>
  );
}

export default App;
