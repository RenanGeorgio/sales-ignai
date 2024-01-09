import React from 'react';
import Navbar from '../../components/Navbar';
import copy from '../../components/Image/copy.svg';
import link from '../../components/Image/link.svg';
import '../../styles/configuracoes.css';

const Configuracoes = () => {
  return (
    <div>
      <Navbar />
      <h1 className='title'>Configurações</h1>
      <h3 className='text'>Uma função fornecia acesso a menus e recursos predefidinos para que, dependendo<br />
        da função atribuida, um administrador pode ter acesso às necessidades do usuário.
      </h3>
      <div className='containerBody'>
        <div className='body'>
          <h4>Total de 4 usuários</h4>
          <img src={link} alt="link" className="link" />
          <h2>Conectar e-mail</h2>
          <img src={copy} alt="Copy" className="copy" />
        </div>
        <div className='body'>
          <h4>Total de 5 usuários</h4>
          <img src={link} alt="link" className="link" />
          <h2>Conectar Redes sociais</h2>
          <img src={copy} alt="Copy" className="copy" />
        </div>
        <div className='body'>
          <h4>1 domínio conectado</h4>
          <img src={link} alt="link" className="link" />
          <h2>Conectar Chatbot ao website</h2>
          <img src={copy} alt="Copy" className="copy" />
        </div>
        <div className='body'>
          <h4>Total de 7 usuários</h4>
          <img src={link} alt="link" className="link" />
          <h2>Adicionar usuários</h2>
          <img src={copy} alt="Copy" className="copy" />
        </div>
        <div className='body'>
          <h4>Total de 4 usuários</h4>
          <img src={link} alt="link" className="link" />
          <h2>Lista de permissões</h2>
          <img src={copy} alt="Copy" className="copy"/>
        </div>
        <div className='body'>
          <h4>Usuários</h4>
          <img src={link} alt="link" className="link" />
          <h2>Gráficos e dados</h2>
          <img src={copy} alt="Copy" className="copy"/>
        </div>
        <div className='body'>
          <h4>Plano e pagamento</h4>
          <img src={link} alt="link" className="link" />
          <h2>Assinatura</h2>
          <img src={copy} alt="Copy" className="copy" />
        </div> 
        <div className='body'>
          <h4>Total de usuários</h4>
          <img src={link} alt="link" className="link" />
          <h2>Integrações</h2>
          <img src={copy} alt="Copy" className="copy" />
        </div>
        <div className='body'>
          <h4>Usuários</h4>
          <img src={link} alt="link" className="link" />
          <h2>Termos de uso</h2>
          <img src={copy} alt="Copy" className="copy" />
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;
