import React from 'react';
import Navbar from '../../components/Navbar';
import { CopIcon,LinkIcon  } from '../../components/Image/icons';

import '../../styles/configuracoes.css';
import { EmailIcon, FaceBookIcon, InstagramIcon, WWWIcon, WhatsAppIcon } from '../../components/Image/icons';

const Configuracoes = () => {
  return (
    <div className="page-content">
      <Navbar />
      <h1 className='title'>Configurações</h1>
      <h3 className='text-config'>Uma função fornecia acesso a menus e recursos predefidinos para que, dependendo<br />
        da função atribuida, um administrador pode ter acesso às necessidades do usuário.
      </h3>
      <div className='containerBody'>
        <div className='body'>
          <div style={{display:'flex'}}>
          <h4>Total de 4 usuários</h4>
            <a>
            <EmailIcon/>
            </a>
            </div>
          <h2>Conectar e-mail</h2>
          <CopIcon />
        </div>
        <div className='body'>
        <div style={{display:'flex'}}>
          <h4>Total de 5 usuários</h4>
           <FaceBookIcon />
           <WhatsAppIcon />
           <InstagramIcon />
            </div>
          <h2>Conectar Redes sociais</h2>
          <CopIcon />
        </div>
        <div className='body'>
        <div style={{display:'flex'}}>
          <h4>1 domínio conectado</h4>
            <WWWIcon/>
            </div>
   
          <h2>Conectar Chatbot ao website</h2>
          <CopIcon />
        </div>
        <div className='body'>
          <h4>Total de 7 usuários</h4>
          <LinkIcon/>
          <h2>Adicionar usuários</h2>
          <CopIcon />
        </div>
        <div className='body'>
          <h4>Total de 4 usuários</h4>
          <LinkIcon/>
          <h2>Lista de permissões</h2>
          <CopIcon/>
        </div>
        <div className='body'>
          <h4>Usuários</h4>
          <LinkIcon/>
          <h2>Gráficos e dados</h2>
          <CopIcon/>
        </div>
        <div className='body'>
          <h4>Plano e pagamento</h4>
          <LinkIcon/>
          <h2>Assinatura</h2>
          <CopIcon />
        </div> 
        <div className='body'>
          <h4>Total de usuários</h4>
          <LinkIcon/>
          <h2>Integrações</h2>
          <CopIcon />
        </div>
        <div className='body'>
          <h4>Usuários</h4>
          <LinkIcon/>
          <h2>Termos de uso</h2>
          <CopIcon />
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;
