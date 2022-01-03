import React from 'react';
import '../styles/Img.css';

export default function Img({ frontImg, backImg, name, id, stats }) {
  const statList = stats.map((stat, index) => {
    return <span key={index}>{`${stat.stat.name}: ${stat.base_stat}`}</span>;
  });

  return (
    <>
      <div className='pokedex-img'>
        <img src={frontImg} alt={`${name}front`} />
        <img src={backImg} alt={`${name}back`} />
      </div>
      <div className='pokedex-info'>
        <span>{`Nombre: ${name}`}</span>
        <span>{`ID: ${id}`}</span>
        {statList}
      </div>
    </>
  );
}
