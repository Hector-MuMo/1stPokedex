import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import Pokemon from './Pokemon';
import '../styles/All.css';

const All = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pagination, setPagination] = useState(
    'https://pokeapi.co/api/v2/pokemon/?limit=9&offset=0'
  );
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch(pagination),
          pokemonList = await result.json();
        setPokeList(pokemonList.results);
        setNext(pokemonList.next);
        setPrev(pokemonList.previous);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [pagination]);

  const pokemons = pokeList.map((pokemon, index) => (
    <Pokemon url={pokemon.url} key={index} />
  ));

  const nextPage = () => {
    setPagination(next);
  };

  const prevPage = () => {
    setPagination(prev);
  };

  const goUp = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className='all-main'>
      <figure className='pokedex-logo'>
        <img src={logo} alt='logo' />
      </figure>
      {pokemons}
      <div className='all-buttons'>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
      <FaArrowAltCircleUp className='go-up' onClick={goUp} />
    </div>
  );
};

export default All;
