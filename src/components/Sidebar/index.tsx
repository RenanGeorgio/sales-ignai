import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/images/image 1.png";
import useAuth from "@hooks/useAuth";
import { 
  BookIcon, 
  CalendarIcon, 
  ChartBarIcon, 
  ComponentsIcon, 
  CopyIcon, 
  FileDollarIcon, 
  TextFileIcon, 
  HeadPhoneIcon, 
  NavLayoutIcon, 
  LayoutSideBarIcon, 
  MailIcon,
  MessageCircleIcon, 
  SettingsIcon, 
  SmartHomeIcon, 
  TextWrapIcon
} from "@icons";
import "@styles/sidebar.css";

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
            <ChartBarIcon/>
            <span className={expanded ? 'show-text' : 'hide-text'}>Estatísticas</span>
          </div>
        </Link>
      </div>
      <div className='section1'>
        <div className="sectionContainer">
        <p className={expanded ? 'show-text' : 'hide-text'}>Atendimento</p>
        <Link className="link" to="/email">
          <div className="menu-item">
            <MailIcon />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Email</p></span>
          </div>
          <div className={expanded ? 'show-text' : 'hide-text'} 
          style={{width:15, height:15, background:'red',
          fontSize:9, color:'white', textAlign:'center', 
          justifyContent:'center', padding:5, borderRadius:6}}>32</div>
        </Link>
        <Link className="link" to="/chat">
          <div className="menu-item">
            <MessageCircleIcon/>
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen' >Chat</p></span>
            </div>
        </Link>
        <Link className="link" to="/calendar">
          <div className="menu-item">
            <CalendarIcon/>
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
            <LayoutSideBarIcon/>
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'> Leads</p></span>
            </div>
        </Link>
        <Link className="link" to="/contact">
          <div className="menu-item">
            <BookIcon />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Contatos</p></span>
            </div>
        </Link>
        <Link className="link"to="/negocios">
          <div className="menu-item">
            <ComponentsIcon/>
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Negócios</p></span>
            </div>
        </Link>
        <Link className="link" to="/">
          <div className="menu-item">
            <FileDollarIcon/>
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
            <TextWrapIcon/>
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Formulário</p></span>
            </div>
        </Link>
        <Link className="link"  to="/email">
          <div className="menu-item">
            <SmartHomeIcon/>
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Automação Email</p></span>
          </div>
        </Link>
        <Link className="link" to="/whatsapp">
          <div className="menu-item">
            <CopyIcon/>
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Disparo WhatsApp</p></span>
          </div>
        </Link>
        <Link className="link" to="/chatbot">
          <div className="menu-item">
            <NavLayoutIcon />
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
            <SettingsIcon />
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Configurações</p></span>
          </div>
        </Link>
        <Link className="link" to="/suporte">
          <div className="menu-item">
            <HeadPhoneIcon/>
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Suporte</p></span>
          </div>
        </Link>
        <Link className="link" to="/">
          <div className="menu-item">
            <TextFileIcon/>
            <span className={expanded ? 'show-text' : 'hide-text'}><p className='textOpen'>Documentation</p></span>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;