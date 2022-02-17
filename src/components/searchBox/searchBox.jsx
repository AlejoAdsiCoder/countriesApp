import React from 'react';

const searchBox = ({ searchCountries, searchInput }) => (
  <div>
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search by country name"
      value={searchInput}
      onChange={(e) => searchCountries(e.target.value)}
    />
  </div>
);

export default searchBox;
