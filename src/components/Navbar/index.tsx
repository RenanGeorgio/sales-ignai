import React from 'react';
import { useState } from 'react';
import '../../styles/navbar.css';
import { BellIcon } from '../Image/icons';
import userIcon from '../Image/Avatar.jpg';
import { Search } from '../Image/icons';
import useAuth from '../../hooks/useAuth';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [searchText, setSearchText] = useState('');
  const { signOut } = useAuth();

  return (
    <header className="navbar">
      <div className="search-container">
        <div className="search-wrapper">
          <Search className={ 'search-icon'} />
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
