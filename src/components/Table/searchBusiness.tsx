import { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams, GRID_DATETIME_COL_DEF, GRID_DATE_COL_DEF } from "@mui/x-data-grid";
import { Button, FormControl, InputLabel, MenuItem, Select, IconButton, Modal } from "@mui/material";
import { VerticalDotsIcon, EditIcon, TrashIcon, LeadIcon, MessageDotsIcon, PaperClipIcon } from "@icons";
import avatar from "@assets/images/Avatar3.png";
import AddInfo from "../Business/addInfo";
import PrecoModal from "../Modal/price";
import { useSidebar } from "@contexts/sidebar/SidebarContext";
import ModalSearchBusiness from "./ModalSearchBusiness";
import rows from "../../dados/data-business.json";

interface SearchBusinessProps { }

type Contact = {
  name: string;
  description: string;
}

interface ContactProp {
  contato: Contact;
  children?: React.ReactNode;
};

type Status = 'Descoberta' | 'Proposta' | 'Negociação' | 'Completa' | 'Rejeitado' | undefined;

const ContatoCell = ({ contato }: ContactProp) => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontWeight: 'bold' }}>{contato.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{contato.description}</div>
      </div>
    </>
  );
};

const getStatusStyles = (status: Status) => {
  const color: string = '#fff';
  let backgroundColor:string = '';

  switch (status) {
    case 'Descoberta':
      backgroundColor = 'rgba(95, 175, 249, 1)';
      break;
    case 'Proposta':
      backgroundColor = 'rgba(236, 126, 254, 1)';
      break;
    case 'Negociação':
      backgroundColor = 'rgba(64, 222, 213, 1)';
      break;
    case 'Completa':
      backgroundColor = 'rgba(40, 199, 111, 1)';
      break;
    case 'Rejeitado':
      backgroundColor = 'rgba(249, 95, 95, 1)';
      break;
    default:
      backgroundColor = '#e9e8e8';
      break;
  }

  return { color, backgroundColor };
};

const columns: GridColDef[] = [
  {
    field: 'negociosAtivos',
    headerName: 'Negócios Ativos',
    width: 550,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {params.row.id !== 5 && params.row.id !== 8 ? (
          <>
            <div style={{ marginRight: '8px' }}>
              <LeadIcon/>         
            </div>
            <ContatoCell contato={params.value} />
          </>
        ) : (
          <div style={{ fontWeight: 'bold', backgroundColor: '#fff', padding: '8px', borderRadius: '5px', width: '100%' }}>
            {params.row.id === 5 ? 'Negócios Completos' : 'Negócios Rejeitados'}
          </div>
        )}
      </div>
    )
  },
  {
    field: 'etapa',
    headerName: 'Etapa',
    width: 150,
    renderCell: (params) => (
      <>
        {params.row.id !== 5 && params.row.id !== 8 ? (
          <div
            style={{
              color: getStatusStyles(params.value).color,
              backgroundColor: getStatusStyles(params.value).backgroundColor,
              border: 'none',
              padding: '2px',
              borderRadius: '5px',
              width: '80px',
              textAlign: 'center',
            }}
          >
            {params.value}
          </div>
        ) : (
          <div style={{ backgroundColor: '#fff', padding: '8px', borderRadius: '5px', width: '100%' }}></div>
        )}
      </>
    )
  },
  { 
    field: 'setor', 
    headerName: 'Setor', 
    width: 150 
  },
  {
    field: 'documentos',
    headerName: 'Documentos',
    width: 180,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {params.row.id !== 5 && params.row.id !== 8 ? (
          <>
          <IconButton>
            <PaperClipIcon/>
          </IconButton>
            <span style={{ marginLeft: '4px' }}>{params.row.acao}</span>
            <div style={{ marginRight: '4px' }}>{params.row.historicoClip}</div>
            <IconButton size='medium'>
              <MessageDotsIcon/>
            </IconButton>
            <span style={{ marginLeft: '4px' }}>{params.row.acao}</span>
            <div style={{ marginRight: '4px' }}>{params.row.historicoMessage}</div>
            <img src={avatar} alt="History Icon 3" />
          </>
        ) : null}
      </div>
    )
  },
  { 
    field: 'valor', 
    headerName: 'Valor', 
    width: 150 
  },
  {
    field: 'acao',
    headerName: 'Ação',
    width: 150,
    renderHeader: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>Ação</div>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: '8px', padding: '5px', minWidth: '40px' }}
          onClick={() => {
          }}
        >
          +
        </Button>
      </div>
    ),
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {params.row.id !== 5 && params.row.id !== 8 ? (
          <>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton color="primary" size="small" onClick={() => { }}>
              <TrashIcon className={undefined} />
            </IconButton>
            <IconButton>
              <VerticalDotsIcon className={undefined} />
            </IconButton>
          </>
        ) : (
          <div style={{ backgroundColor: '#fff', width: '100%' }}></div>
        )}
      </div>
    )
  }
];

const SearchBusiness: React.FC<SearchBusinessProps> = () => {
  const [showKanban, setShowKanban] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const { isSidebarExpanded } = useSidebar();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleShowKanban = () => {
    setShowKanban(true);
  };

  const handleShowList = () => {
    setShowKanban(false);
  };

  const rowsWithStylization = rows.map((row: any) => {
    if (row.id === 5) {
      return { ...row, negociosAtivos: { name: 'Negócios' } };
    } else if (row.id === 8) {
      return { ...row, negociosAtivos: { name: 'Negócios Rejeitados' } };
    }

    return row;
  });

  return (
    <div className={`business-app-container ${isSidebarExpanded ? 'sidebar-expanded' : ''}`}>
      {showKanban ? (
        <AddInfo setShowList={handleShowList} />
      ) : (
        <div style={{ width: '91.5%', height: '100%', paddingTop: 25, 
        paddingBottom: 24, margin: 'auto', position: 'relative', left: 90, 
        flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', 
        gap: 1, display: 'inline-flex',  }}>
          <div style={{ boxShadow: '0 0 5px 2px rgba(138, 138, 138, 0.2)', width: '100%' }}>
            <div style={{ alignSelf: 'stretch', paddingLeft: 4, paddingRight: 1, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', width: '100%', marginLeft: '25px', marginTop: '15px' }}>
              <div style={{ color: 'black', fontSize: 18, fontFamily: 'sans-serif', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word' }}>Filtro de busca: Negócios</div>
            </div>
            <div style={{ justifyContent: 'space-between', alignItems: 'center', gap: 24, display: 'flex', width: '98%', padding: '5px 0px 1px 10px', marginBottom: '25px', marginLeft: '15px' }}>
              <div style={{ flex: '1 ', height: 38, borderRadius: 6, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', width: '100px' }}>
                <div style={{ flex: '1 1 0', height: 38, background: 'white', borderRadius: 6, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                  <form style={{ width: '100%', height: '95%' }}>
                    <select style={{ width: '80%', height: '100%', borderRadius: 6 }}>
                      <option value="" selected>
                        <em>Selecionar por ativos</em>
                      </option>
                      <option value={10}>Twenty</option>
                      <option value={21}>Twenty one</option>
                      <option value={22}>Twenty one and a half</option>
                    </select>
                  </form>
                </div>
              </div>
              <div style={{ flex: '1 1 0', height: 38, borderRadius: 6, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                <div style={{ flex: '1 1 0', height: 38, background: 'white', borderRadius: 6, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                  <form style={{ width: '100%', height: '95%' }}>
                    <select style={{ margin: 1, width: '80%', height: '100%', borderRadius: 6 }}>
                      <option value="" selected>
                        <em>Selecionar origem do lead</em>
                      </option>
                      <option value={10}>Twenty</option>
                      <option value={21}>Twenty one</option>
                      <option value={22}>Twenty one and a half</option>
                    </select>
                  </form>
                </div>
              </div>
              <div style={{ flex: '1 1 0', height: 38, borderRadius: 6, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                <div style={{ flex: '1 1 0', height: 38, background: 'white', borderRadius: 6, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                  <form style={{ width: '80%', height: '95%' }}>
                    <select style={{ width: '100%', height: '100%', borderRadius: 6 }}>
                      <option value="" selected>
                        <em>Selecionar colaborador responsável</em>
                      </option>
                      <option value={10}>Twenty</option>
                      <option value={21}>Twenty one</option>
                      <option value={22}>Twenty one and a half</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div style={{ maxWidth: '98.5%', height: 38, justifyContent: 'space-between', 
          alignItems: 'center', gap: 16, display: 'flex', width: '100%', borderRight: '1px #DBDADE solid',
           borderLeft: '1px #DBDADE solid', padding: 10, backgroundColor: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15, height: '100%' }}>
              <select style={{ display: 'flex', justifyContent: 'center', height: '2rem', width: '5rem', padding: '5px 10px 5px 5px', borderRadius: '5px' }}>
                <option selected>10</option>
                <option >20</option>
                <option >30</option>
                <option >40</option>
              </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15, padding: 15, marginTop: '15px' }}>
              <select
                style={{
                  height: 33, background: 'white',
                  borderRadius: 6, border: '1px #DBDADE solid',
                  justifyContent: 'flex-start', width: '150px',
                  alignItems: 'center', display: 'flex'
                }}
              >
                <option>Assignados a mim</option>
                <option>Todos</option>
              </select>
              <input
                title='Buscar'
                placeholder='Buscar'
                style={{
                  height: 33, background: 'white',
                  borderRadius: 6, border: '1px #DBDADE solid',
                  justifyContent: 'flex-start',
                  alignItems: 'center', display: 'flex'
                }}
              />
              <div>
                <Button style={{
                  background: 'rgba(115, 103, 240, 1)',
                  color: '#fff',
                  width: 300,
                  cursor: 'pointer',
                }}
                  onClick={handleOpen}
                >
                  + Adicionar Pedido / Proposta
                </Button>
              </div>
            </div>
          </div>
          <div style={{ height: 620, width: '100%' }}>
            <DataGrid
              rows={rowsWithStylization}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 }
                }
              }}
              pageSizeOptions={[10, 10]}
              isCellEditable={(params) => params.row.Contato % 2 === 0}
            />
          </div>
          <Modal open={open} >
            <ModalSearchBusiness close={handleClose}/>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default SearchBusiness;