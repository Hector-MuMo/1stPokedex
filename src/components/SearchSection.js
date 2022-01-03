import React, { useState } from 'react';
import '../styles/SearchSection.css';

export default function SearchSection({ searchValue }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='pokedex-search'>
      <h2>Busca por Nombre o ID del Pokemon</h2>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={(e) => {
          searchValue(inputValue);
        }}
      >
        Search
      </button>
    </div>
  );
}
