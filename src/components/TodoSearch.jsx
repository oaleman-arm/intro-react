import React, { useState } from 'react';
import '../css/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

  //const [] = useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Onion"
        value={searchValue}
        onChange={onSearchValueChange}
      />

    </>

  );
}

export default TodoSearch;