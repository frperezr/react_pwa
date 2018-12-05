import React from 'react';

const SearchBox = ({ searchChange }) => (
  <div className="pa2">
    <input
      aria-label="Search Robots"
      className="pa3 ba b--green b-lightest-blue"
      type="search"
      placeholder="search robots"
      onChange={searchChange}
    />
  </div>
);

export default SearchBox;
