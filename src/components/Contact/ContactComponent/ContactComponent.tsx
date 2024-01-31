
import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Avatar, Button, IconButton } from '@mui/material';
import { DotsVertical, Edit, MessageDots, PaperClip, Plus, Trash, } from '../../Image/icons'
import rows from '../../../dados/data1.json';
import  {Navigate, useNavigate}  from 'react-router-dom';


const ContatoCell = ({ client }) => {
    return (
        <>
      <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{ fontWeight: 'bold' }}>{client?.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{client?.email} {client?.telefone}</div>
      </div>
      </>
    );
};

// const Imagem =({profile}) =>{
//     return(
//         <>
//         <img src={profile.image}  alt={`imagem de`} width="40" />
//         </>
//     )
// }

  const getStatusStyles = (status) => {
    const color = status === 'Não ativo' ? 'red' : 'green';
  return { color, };
  };
  const getPriorityStyles = (priority) => {
    let color, backgroundColor;
  
    if (priority === 'Alta') {
      color = 'white';
      backgroundColor = 'red';
    } else if (priority === 'Média') {
      color = 'white';
      backgroundColor = 'orange';
    } else if (priority === 'Baixa') {
      color = 'white';
      backgroundColor = 'lightgreen';
    } else {
      // Tratamento padrão caso a prioridade não seja reconhecida
      color = 'black';
      backgroundColor = 'white';
    }
  
    return { color, backgroundColor };
  };
  
  
  export default function ContactComponent() {
    const [checkboxSelection, setCheckboxSelection] = React.useState(true);
    
    const navigate = useNavigate();
    
    const columns: GridColDef[] = [
        { field: 'client', headerName: 'Cliente-Conta', width: 450,
        renderCell: (params) => {
      
            return (
              <div style={{ cursor: 'pointer' }} >
                <ContatoCell client={params.value} />
              </div>
            );
            
         }
   },
      { field: 'priority', headerName: 'Prioridade',  width: 200, align:'center',
      headerAlign:'center',
      renderCell: (params) => (
          <div style={{ 
              color: getPriorityStyles(params.value).color, 
              backgroundColor: getPriorityStyles(params.value).backgroundColor, 
              border: '1px solid',
              padding:'2px',
              borderRadius:'5px',
              width:'95px',
              textAlign:'center'
              }}>
              {params.value}
          </div>
        ),
  },
      { field: 'sector', headerName: 'Setor', width: 190, align:'center',
      headerAlign:'center',},
      { field: 'document', headerName: 'Documentos', width: 250,align:'center',
      headerAlign:'center',
      renderCell:(params)=>{
      return(
          <div>
      <IconButton size="small" aria-label="upload document"><PaperClip/> </IconButton>{params.value}
      <IconButton size="small"> <MessageDots/></IconButton>{params.value}
      </div>
      )}
  },
  
      { field: 'status', headerName: 'Status', width: 130,align:'center',
      headerAlign:'center',
      renderCell: (params) => (
          <div style={{ 
              color: getStatusStyles(params.value).color, 
              // backgroundColor: getStatusStyles(params.value)
              border: '1px solid',
              padding:'2px',
              borderRadius:'5px',
              width:'95px',
              textAlign:'center'
              }}>
              {params.value}
          </div>
        ),
   },
      {
          field: 'acao',
          headerName: 'Ação',
          width: 160,
          align:'right',
      headerAlign:'center',
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
    return (

        <div style={{ width: '94%', height: '100%', paddingTop: 2, paddingBottom: 24, paddingLeft: 80, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 1, display: 'inline-flex' }}>
            <div style={{ alignSelf: 'stretch', paddingLeft: 4, paddingRight: 1, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', width: '100%' }}>
                <div style={{ color: 'black', fontSize: 18, fontFamily: 'sans-serif', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word' }}>Filtro de busca</div>
            </div>

            <div style={{ justifyContent: 'space-between', alignItems: 'center', gap: 24, display: 'flex', width: '98%', padding: '5px 0px 1px 10px' }}>
                <div style={{ flex: '1 ', height: 38, borderRadius: 6, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', width: '100px' }}>
                    <div style={{ flex: '1 1 0', height: 38, background: 'white', borderRadius: 6, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                        <form style={{ width: '100%', height: '95%' }}>
                            <select style={{ width: '80%', height: '100%', borderRadius: 6, }}>
                                <option value="" selected>
                                    <span>Selecionar por prioridade</span>
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
                            <select style={{ margin: 1, width: '80%', height: '100%', borderRadius: 6, }}>
                                <option value="" selected>
                                    <span>Selecionar por setor</span>
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
                            <select style={{ width: '100%', height: '100%', borderRadius: 6, }}>
                                <option value="" selected>
                                    <span>Selecionar por status</span>
                                </option>
                                <option value={10}>Twenty</option>
                                <option value={21}>Twenty one</option>
                                <option value={22}>Twenty one and a half</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>

         

            <div style={{ flex: '1 1 0', height: 38, justifyContent: 'space-between', alignItems: 'center', gap: 16, display: 'flex', width: '100%', borderTop: '1px #DBDADE solid', padding: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15, height: '100%' }}>
                    <select style={{ display: 'flex', justifyContent: 'center', height: '2rem', width:'5rem', padding: '5px 10px 5px 5px', borderRadius:'5px' }}>
                        <option selected>10</option>
                        <option >20</option>
                        <option >30</option>
                        <option >40</option>
                    </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15, padding: 15 }}>
                <form style={{  }}>
                            <select style={{ width: '100%', height: '100%', borderRadius: 6, }}>
                                <option value="" selected>
                                    <span>Assinados a mim</span>
                                </option>
                                <option value={10}>Twenty</option>
                                <option value={21}>Twenty one</option>
                                <option value={22}>Twenty one and a half</option>
                            </select>
                        </form>
                    <input
                        title='Buscar'
                        placeholder='Buscar'
                        style={{
                            height: 33, background: 'white',
                            borderRadius: 6, border: '1px #DBDADE solid',
                            justifyContent: 'flex-start',
                            alignItems: 'center', display: 'flex'
                        }} />

                    <div>
                        <Button style={{
                            background: '#7367F0',
                            boxShadow: '0px 2px 4px rgba(165, 163, 174, 0.30)',
                            borderRadius: 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#fff',
                            //   fontSize: 14,
                            display: 'flex'
                        }}>
                           <span style={{alignItems:'center'}}><Plus /></span> 
                           <span>Adicionar</span>
                           
                        </Button>
                    </div>
                </div>
            </div>

            <div style={{ height: 470, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 7 },
                        },
                    }}
                    pageSizeOptions={[7]}
                    isCellEditable={(params) => params.row.Contato % 2 === 0}
                    onCellClick={(params, event) => {
                        // if (params.field === 'client') {
                            navigate(`/details`);
                        // }
                    }}
                />
            </div>
        </div>
    )
}
