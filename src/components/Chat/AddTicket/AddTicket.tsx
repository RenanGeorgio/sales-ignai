import { IconButton } from "@mui/material";
import { VerticalDotsIcon, PencilIcon, TrashIcon, UploadIcon } from "@icons";
import "./AddTicket.module.css";

interface Props {
  onUploadFile: (file: any) => void;
  onSetShow: (key: boolean) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function AddTicket({ onUploadFile, onSetShow }: Props) {
  const handleFileUpload = (file: any) => {
    // Aqui você pode fazer algo com o arquivo, como enviar para o servidor
    console.log('Arquivo enviado:', file);

    // Se você quiser notificar o componente Treatment sobre o upload, chame a função
    if (onUploadFile) {
      onUploadFile(file);
    }
  };

  return (
    <div className='main-container'>
      <div className='box'>
        <div className='section'>
          <div className='section-3'>
            <span className='text-2add'>Atendimento via:</span> 
          </div>
        </div>
        <div className='section'>
          <div className='section-3'>
            <span className='text-2add'>Cliente:</span>
          </div>
        </div>
        <div className='section'>
          <div className='section-3'>
            <span className='text-2add'>Responsável:</span>
          </div>
        </div>
      </div>
      <div className='group-2'>
        {/* primeiro select  */}
        <div className='group-3'>
          <div className='wrapper-2'>
            <select className='section-5'>
              <option selected className='text-4'>Telefone</option>
            </select>
          </div>
        </div>
        {/* segundo select  */}
        <div className='group-3'>
          <div className='wrapper-3'>
            <select className='group-4'>
              <option selected className='text-5'>Queiroz Galvão</option>
            </select>
          </div>
        </div>
        {/* terceiro select  */}
        <div className='group-3'>
          <div className='wrapper-4'>
            <select className='box-3'>
              <option selected className='text-6'>Roberto Almeida</option>
            </select>
          </div>
        </div>
      </div>
      <div className='wrapper-5'>
        <div className='wrapper-6'>
          {/* <div className='img-3' /> */}
          <div className='group-6'>
            <div className='box-4'>
              <div className='wrapper-7'>
                <span className='text-7'>Ticket protocolo 2023103377 </span>
                <span className='text-8'>- </span>
                <span className='text-9'>Número gerado automaticamente </span>
              </div>
            </div>
            <div className='section-6'>
              <span className='text-focused'>Cliente: Queiroz Galvão </span>
            </div>
            <span className='text-address'>
              23 Shatinon Mekalan, CEP 29065-616, Brasil
            </span>
          </div>
          <div className='wrapper-8'>
            <div className='wrapper-9'>
              <div className='section-7'>           
                  <IconButton className='pic-2'>
                  <PencilIcon className={undefined} />
                  </IconButton>           
              </div>
            </div>
            <div className='group-7'>
              <div className='section-8'>
                <IconButton className='img-4'>
                  <TrashIcon className={undefined}/>
                  </IconButton>
              </div>
            </div>
            <div className='wrapper-a'>
              <div className='group-8'>
                <IconButton className='img-5'>
                  <VerticalDotsIcon className={undefined}/>
                  </IconButton>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='img-6' /> */}
        <div className='box-5'>
          <div className='box-6'>
            {/* <div className='pic-3' /> */}
            <div className='wrapper-b'>
              <span className='text-c'>Assunto: Atraso no pedido</span>
              <span className='text-d'>Data 17/10/2023 - Hora: 17:55</span>
            </div>
            <div className='section-9'>
            <div className='wrapper-9'>
              <div className='section-7'>
                <IconButton className='pic-2'>
                  <PencilIcon className='pic2' />
                  </IconButton>
              </div>
            </div>
              <div className='group-7'>
              <div className='section-8'>
                <IconButton className='img-4'>
                  <TrashIcon className={undefined}/>
                  </IconButton>
              </div>
            </div>
              <div className='wrapper-a'>
              <div className='group-8'>
                <IconButton className='img-5'>
                  <VerticalDotsIcon className={undefined}/>
                  </IconButton>
              </div>
            </div>
            </div>
          </div>
          <div className='group-d'>
            <span className='text-e'>Ocorrido</span>
            <span className='text-f'>
              Cliente do pedido número 558990 disse que o pedido está atrasado.
              <br />
              Time de logística foi contatado e informou que será enviado em 2
              dias úteis.
            </span>
            <div className='card-heading'>
              <div className='form'>
                <div className='container-image-upload'>
                  <div className='image-upload'><UploadIcon className={undefined}/></div>
                </div>
                <span className='text-10'>Jogue aqui seu arquivo</span>
                <span className='text-11'>ou</span>
                <div className='buttonContainerInput'>            
                  <input type="file" className='inputs' onClick={handleFileUpload} />
                  <span className='attachFileSpan'>Buscar Arquivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}