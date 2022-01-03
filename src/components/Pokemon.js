import React, { useEffect, useState } from 'react';
import Img from './Img';

const Pokemon = ({ url }) => {
  const [name, setName] = useState('');
  const [frontImg, setFrontImg] = useState('');
  const [backImg, setBackImg] = useState('');
  const [id, setId] = useState('');
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(url),
        data = await result.json();

      setName(data.name);
      setFrontImg(data.sprites.front_default);
      setBackImg(data.sprites.back_default);
      setId(data.id);
      setStats(data.stats);
    };

    getData();
  }, [url]);
  return (
    <Img
      frontImg={frontImg}
      backImg={backImg}
      name={name}
      id={id}
      stats={stats}
    />
  );
};

export default Pokemon;
