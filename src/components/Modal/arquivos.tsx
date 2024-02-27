import React from 'react';
// import FileUploadIcon from '@mui/icons-material/FileUpload';
import '../../styles/business.css';

const ArquivosModal: React.FC = () => {
  return (
    <div className="business-modal-arquivos-container">
      <div className="business-modal-content-arquivos">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="business-modal-content-arquivo">
            <h2>Arquivos</h2>
          </div>
          <div className="business-modal-content-add">
            <span>Add arquivo de endereço</span>
          </div>
        </div>
        <div className="business-modal-content-arquivos-label">
          <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>
            {/* <FileUploadIcon /> */}
          </div>
          <span className='business-span'>Jogue seu arquivo aqui</span> 
          <span>ou</span>
          <button>Buscar arquivo</button>
        </div>
      </div>
    </div>
  );
};

export default ArquivosModal;
