import React, { useState } from 'react';
import mail from '../Image/mail.svg';
import book from '../Image/book-2.svg';
import calendar from '../Image/calendar.svg';
import chart from '../Image/chart-bar.svg';
import copy from '../Image/copy.svg';
import fileDollar from '../Image/file-dollar.svg';
import fileText from '../Image/file-text.svg';
import headphones from '../Image/headphones.svg';
import logo from '../Image/image 1.png';
import layoutNavbar from '../Image/layout-navbar.svg';
import layoutSidebar from '../Image/layout-sidebar.svg';
import messageCircle from '../Image/message-circle-2.svg';
import settings from '../Image/settings.svg';
import smartHome from '../Image/smart-home.svg';
import textWrap from '../Image/text-wrap-disabled.svg';
import components from '../Image/components.svg';
import '../../styles/sidebar.css';
import { Link } from 'react-router-dom';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <div onClick={toggleSidebar}>
        <img src={logo} alt="Logo" className='logo'/>
      </div>
      <Link to="/">
        <div className="menu-item">
          <img src={chart} alt="Estatísticas" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Estatísticas</span>
        </div>
      </Link>

      <Link to="/">
        <div className="menu-item">
          <img src={mail} alt="Mail" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Email</span>
        </div>
      </Link>

      <Link to="/">
        <div className="menu-item">
          <img src={messageCircle} alt="Chat" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Chat</span>
          </div>
      </Link>

      <Link to="/">
        <div className="menu-item">
          <img src={calendar} alt="Calendar" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Calendário</span>
          </div>
      </Link>
      
      <Link to="/">
        <div className="menu-item">
          <img src={layoutSidebar} alt="Layout Sidebar" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Leads</span>
          </div>
      </Link>

      <Link to="/">
        <div className="menu-item">
          <img src={book} alt="Book" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Contatos</span>
          </div>
      </Link>

      <Link to="/">
        <div className="menu-item">
          <img src={components} alt="Components" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Negócios</span>
          </div>
      </Link>

      <Link to="/">
        <div className="menu-item">
          <img src={fileDollar} alt="File Dollar" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Faturas</span>
          </div>
      </Link>

      <Link to="/formulario">
        <div className="menu-item">
          <img src={textWrap} alt="Text Wrap" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Formulário</span>
          </div>
      </Link>

      <Link to="/email">
        <div className="menu-item">
          <img src={smartHome} alt="Email" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Automação Email</span>
        </div>
      </Link>

      <Link to="/whatsapp">
        <div className="menu-item">
          <img src={copy} alt="Copy" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Disparo WhatsApp</span>
        </div>
      </Link>

      <Link to="/chatbot">
        <div className="menu-item">
          <img src={layoutNavbar} alt="ChatBot" />
          <span className={expanded ? 'show-text' : 'hide-text'}>ChatBot</span>
        </div>
      </Link>

      <Link to="/configuracoes">
        <div className="menu-item">
          <img src={settings} alt="Settings" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Configurações</span>
        </div>
      </Link>

      <Link to="/suporte">
        <div className="menu-item">
          <img src={headphones} alt="Suporte" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Suporte</span>
        </div>
      </Link>

      <Link to="/">
        <div className="menu-item">
          <img src={fileText} alt="File Text" />
          <span className={expanded ? 'show-text' : 'hide-text'}>Documentation</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
