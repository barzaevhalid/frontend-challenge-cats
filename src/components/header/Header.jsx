import React from 'react';

import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
            <div className="header__inner">
                <ul className='header__menu' >
                    <li className='menu__item'> 
                       <NavLink className='link' to='/frontend-cats-challenge'>Все котики</NavLink>
                    </li>
                    <li className='menu__item'>
                      <NavLink  className='link' to='favorite-cats/'>Любимые котики</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </header>
    );
};

export default Header;