import React from 'react';
import logo from '../assets/logo.svg';

const Home = () => {
  return (
    <div className='pokedex-main'>
      <figure className='pokedex-logo'>
        <img src={logo} alt='logo' />
      </figure>
      <section className='pokedex-section'>
        <h2>Información de interés</h2>
        <p>
          En esta pokedex podras buscar por el nombre o ID del pokemon o elegir
          ver TODOS los pokemons
        </p>
      </section>
    </div>
  );
};

export default Home;
