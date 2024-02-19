import React from 'react';
import { useState } from 'react';
import '../../styles/navbar.css';
import { BellIcon } from '../Image/icons';
import userIcon from '../Image/Avatar.jpg';
import searchIcon from '../Image/search.svg';
import useAuth from '../../hooks/useAuth';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [searchText, setSearchText] = useState('');
  const { signOut } = useAuth();

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
            <BellIcon/>
            <img className="icon" src={userIcon} alt="Usuário" onClick={() => signOut()}/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
