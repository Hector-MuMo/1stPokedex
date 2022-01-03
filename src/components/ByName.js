import React, { useEffect, useState } from 'react';
import Img from '../components/Img';
import SearchSection from '../components/SearchSection';
import logo from '../assets/logo.svg';

const ByName = () => {
  const [searchValue, setSearchValue] = useState('bulbasaur');
  const [name, setName] = useState('');
  const [frontImg, setFrontImg] = useState('');
  const [backImg, setBackImg] = useState('');
  const [id, setId] = useState('');
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;

      let result = await fetch(url).then((result) => result.json());

      setName(result.name);
      setFrontImg(result.sprites.front_default);
      setBackImg(result.sprites.back_default);
      setId(result.id);
      setStats(result.stats);
    };

    getData();
  }, [searchValue]);

  return (
    <>
      <figure className='pokedex-logo'>
        <img src={logo} alt='logo' />
      </figure>
      <SearchSection searchValue={setSearchValue} />
      <Img
        frontImg={frontImg}
        backImg={backImg}
        name={name}
        id={id}
        stats={stats}
      />
    </>
  );
};

export default ByName;
