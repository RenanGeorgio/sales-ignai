
import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams,GRID_DATETIME_COL_DEF, GRID_DATE_COL_DEF } from '@mui/x-data-grid';
import { Button, FormControl, InputLabel, MenuItem, Select, IconButton } from '@mui/material';
import { DotsVertical, Edit, Trash, } from '../../components/Image/icons';
import rows from '../../dados/data-leads.json';
import LeadIcon from '../../components/Image/LabelInitials.svg';
import avatar from '../../components/Image/Avatar3.png';
import message from '../../components/Image/message-dots.svg';
import paperclip from '../../components/Image/paperclip.svg';
import { useSelector } from 'react-redux';

interface SearchFilterProps {
    setShowList: () => void; // New prop
    leadsData: [];
}

const leadStatus = {
    INITIAL_CONTACT: "Contato Inicial"
}

const leadOrigin = {
    WHATSAPP: "Whatsapp"
}

const ContatoCell = ({ contato }) => {
    return (
        <>
      <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{ fontWeight: 'bold' }}>{contato.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{contato.description}</div>
      </div>
      </>
    );
};

  const getStatusStyles = (status) => {
    const color = status === 'Contato inicial' ? 'rgba(40, 199, 111, 1)' : 'rgba(40, 199, 111, 1)';
    const backgroundColor = status === 'Contato inicial' ? '#e9e8e8' : '#e9e8e8';


  return { color, backgroundColor };
  };

  const columns: GridColDef[] = [
    {
        field: 'lead',
        headerName: 'Lead',
        width: 550,
        renderCell: (params) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={LeadIcon} alt="Lead Icon" style={{ marginRight: '8px' }} />
                <ContatoCell contato={params.value} />
            </div>
        ),
    },
    { field: 'leadOrigin', headerName: 'Lead Origem', width: 150,
    renderCell: (params) => {
        const origin = leadOrigin[params?.value]
        return origin
    } },
    { field: 'company', headerName: 'Empresa', width: 150 },
    {
        field: 'activity',
        headerName: 'Histórico',
        width: 180,
        renderCell: (params) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Add your history icons here */}
                <img src={paperclip} alt="History Icon 1" style={{ marginRight: '4px' }} />
                <div style={{ marginRight: '4px' }}>{params.row.historicoClip}</div>
                <img src={message} alt="History Icon 2" style={{ marginRight: '4px' }} />
                <div style={{ marginRight: '4px' }}>{params.row.historicoMessage}</div>
                <img src={avatar} alt="History Icon 3" />
            </div>
        ),
    },
    { field: 'topic', headerName: 'Status', width: 150,
        renderCell: (params) => {
            const status = leadStatus[params?.value]
            return(
                <div style={{ 
                    color: getStatusStyles(status).color, 
                    backgroundColor: getStatusStyles(status).backgroundColor, 
                    border: 'none',
                    padding:'2px',
                    borderRadius:'5px'
                }}>
                    {status}
                </div>
            )
        },
    },
    {
        field: 'acao',
        headerName: 'Ação',
        width: 150,
        renderCell: (params) => {
            return (
                <div>
                    <IconButton>
                        <Edit/>
                    </IconButton>
                    <IconButton
                        color="primary"
                        size="small"
                        onClick={() => {
                        // ...
                        }}
                    >
                        <Trash className={undefined} />
                    </IconButton>
                    <IconButton>
                        <DotsVertical className={undefined}/>
                    </IconButton>
                </div>
            );
        },
    },
];

const SearchFilter: React.FC<SearchFilterProps> = ({ setShowList, leadsData }) => {
    return (

        <div style={{ width: '92%', height: '100%', paddingTop: 25, paddingBottom: 24, paddingLeft: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 1, display: 'inline-flex',  zIndex: '999', backgroundColor:'#fff'}}>
            <div style={{boxShadow: '0 0 5px 2px rgba(138, 138, 138, 0.2)', width:'100%'}}>
                <div style={{ alignSelf: 'stretch', paddingLeft: 4, paddingRight: 1, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', width: '100%', marginLeft:'15px', marginTop:'15px' }}>
                    <div style={{ color: 'black', fontSize: 18, fontFamily: 'sans-serif', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word' }}>Filtro de busca</div>
                </div>
                <div style={{ position: 'absolute', top: '110px', right: '50px' }}>
                    <button onClick={() => setShowList(true)} style={{color:'rgba(75, 70, 92, 1)', width:'108px', fontSize: '18px', border: 'none', backgroundColor:'#fff'}}>Ver kanban</button>
                </div>
                <div style={{ justifyContent: 'space-between', alignItems: 'center', gap: 24, display: 'flex', width: '100%', padding: '5px 0px 1px 10px', marginBottom:'25px', marginLeft:'15px'}}>
                    <div style={{ flex: '1 ', height: 38, borderRadius: 6, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', width: '100px' }}>
                        <div style={{ flex: '1 1 0', height: 38, background: 'white', borderRadius: 6, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <form style={{ width: '100%', height: '95%' }}>
                                <select style={{ width: '80%', height: '100%', borderRadius: 6}}>
                                    <option value="" selected>
                                        <em>Selecionar status de lead no pipeline</em>
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
                                <select style={{ margin: 1, width: '80%', height: '100%', borderRadius: 6}}>
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

            <div style={{ maxWidth:'98.5%', height: 38, justifyContent: 'space-between', alignItems: 'center', gap: 16, display: 'flex', width: '100%', borderRight: '1px #DBDADE solid', borderLeft: '1px #DBDADE solid', padding: 10, zIndex: '999', backgroundColor:'#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15, height: '100%' }}>
                    <select style={{ display: 'flex', justifyContent: 'center', height: '2rem', width:'5rem', padding: '5px 10px 5px 5px', borderRadius:'5px' }}>
                        <option selected>10</option>
                        <option >20</option>
                        <option >30</option>
                        <option >40</option>
                    </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15, padding: 15, marginTop:'15px' }}>
                    <select 
                        style={{  
                            height: 33, background: 'white',
                            borderRadius: 6, border: '1px #DBDADE solid',
                            justifyContent: 'flex-start', width:'150px',
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
                            boxShadow: '0px 2px 4px rgba(165, 163, 174, 0.30)',
                            borderRadius: 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#fff',
                            width: '137px',
                            //   fontSize: 14,
                            display: 'flex',
                            cursor: 'pointer'
                        }}>
                           + Adicionar
                        </Button>
                    </div>
                </div>
            </div>

            <div style={{ height: '80vh', width: '100%' }}>
                <DataGrid
                    rows={[]}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    autoPageSize
                    // pageSizeOptions={[5, 10, 20]}
                    isCellEditable={(params) => params.row.Contato % 2 === 0}
                    getRowId={(row) => row._id}
                />
            </div>


        </div>
    )
}

export default  SearchFilter;