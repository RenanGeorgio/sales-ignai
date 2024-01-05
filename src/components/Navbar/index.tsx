import React from 'react';
import { useState } from 'react';
import '../../styles/navbar.css';
import bellIcon from '../Image/bell.svg';
import userIcon from '../Image/Avatar.jpg';
import searchIcon from '../Image/search.svg';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <header className="navbar">
      <div className="search-container">
        <div className="search-wrapper">
          <img className="search-icon" src={searchIcon} alt="Ícone de Pesquisa" />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Buscar (Ctrl+F)"
            className="search-input"
          />
          <div className="icons">
            <img className="icon" src={bellIcon} alt="Sininho" />
            <img className="icon" src={userIcon} alt="Usuário" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
