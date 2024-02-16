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
import useAuth from '../../hooks/useAuth';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const { isAuthenticated } = useAuth();
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  if(!isAuthenticated) return;
  
  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <div onClick={toggleSidebar}>
        <img src={logo} alt="Logo" className='logo'/>
      </div>
      <div className='section1'>
        <p className={expanded ? 'show-text' : 'hide-text'}>Dados</p>
        <Link className="link" to="/estatisticas">
          <div className="menu-item">
            <img src={chart} alt="Estatísticas" />
            <span className={expanded ? 'show-text' : 'hide-text'}>Estatísticas</span>
          </div>
        </Link>
      </div>
      <div className='section1'>
        <div className="sectionContainer">
        <p className={expanded ? 'show-text' : 'hide-text'}>Atendimento</p>
        <Link className="link" to="/">
          <div className="menu-item">
            <img src={mail} alt="Mail" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Email</p></span>
          </div>
          <div className={expanded ? 'show-text' : 'hide-text'} 
          style={{width:15, height:15, background:'red',
          fontSize:9, color:'white', textAlign:'center', 
          justifyContent:'center', padding:5, borderRadius:6}}>32</div>
        </Link>
        <Link className="link" to="/chat">
          <div className="menu-item">
            <img src={messageCircle} alt="Chat" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen' >Chat</p></span>
            </div>
        </Link>
        <Link className="link" to="/calendar">
          <div className="menu-item">
            <img src={calendar} alt="Calendar" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Calendário</p></span>
            </div>
        </Link>
        </div>
      </div>

      <div className='section1'>
      <div className='sectionContainer'>
        <p className={expanded ? 'show-text' : 'hide-text'}>Vendas</p>
        <Link className="link" to="/leads">
          <div className="menu-item">
            <img src={layoutSidebar} alt="Layout Sidebar" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'> Leads</p></span>
            </div>
        </Link>
        <Link className="link" to="/contact">
          <div className="menu-item">
            <img src={book} alt="Book" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Contatos</p></span>
            </div>
        </Link>
        <Link className="link"to="/negocios">
          <div className="menu-item">
            <img src={components} alt="Components" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Negócios</p></span>
            </div>
        </Link>
        <Link className="link" to="/">
          <div className="menu-item">
            <img src={fileDollar} alt="File Dollar" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'> Faturas</p></span>
            </div>
        </Link>
      </div>

      </div>

      <div className='section1'>
      <div className="sectionContainer">
        <p className={expanded ? 'show-text' : 'hide-text'}>Funil de Vendas</p>
        <Link className="link" to="/formulario">
          <div className="menu-item">
            <img src={textWrap} alt="Text Wrap" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Formulário</p></span>
            </div>
        </Link>

        <Link className="link"  to="/email">
          <div className="menu-item">
            <img src={smartHome} alt="Email" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Automação Email</p></span>
          </div>
        </Link>

        <Link className="link" to="/whatsapp">
          <div className="menu-item">
            <img src={copy} alt="Copy" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Disparo WhatsApp</p></span>
          </div>
        </Link>

        <Link className="link" to="/chatbot">
          <div className="menu-item">
            <img src={layoutNavbar} alt="ChatBot" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>ChatBot</p></span>
          </div>
        </Link>
        </div>
      </div>

      <div className='section1'>
      <div className="sectionContainer">
        <p className={expanded ? 'show-text' : 'hide-text'}>Ajuda</p>
        <Link className="link" to="/configuracoes">
          <div className="menu-item">
            <img src={settings} alt="Settings" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Configurações</p></span>
          </div>
        </Link>

        <Link className="link" to="/suporte">
          <div className="menu-item">
            <img src={headphones} alt="Suporte" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Suporte</p></span>
          </div>
        </Link>

        <Link className="link" to="/">
          <div className="menu-item">
            <img src={fileText} alt="File Text" />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Documentation</p></span>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;