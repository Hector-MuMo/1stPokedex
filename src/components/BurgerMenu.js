import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const BurgerMenu = (props) => {
  return (
    <Menu {...props}>
      <Link className='menu-item' to='/'>
        Home
      </Link>
      <Link className='menu-item' to='/nombre'>
        Por nombre
      </Link>
      <Link className='menu-item' to='/todos'>
        Ver todos
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
