import React, { useState } from 'react';
import { CurrencyDollar, DotsVertical, PaperClip, ShoppingCart } from '../../Image/icons';
import { Button, IconButton } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import rows from '../../../dados/data2.json'
import ImageLogo from '../../Image/Queiroz_Galvão_Logo 1.png'

const getPriorityStyles = (priority) => {
  let color, backgroundColor;

  if (priority === 'Paga') {
    color = '#00CFE8';
    backgroundColor = 'rgba(0, 207, 232, 0.16)';
  } else if (priority === 'Aguardando') {
    color = '#FF9F43';
    backgroundColor = 'rgba(255, 159, 67, 0.16)';
  } else if (priority === 'Atrasada') {
    color = '#28C76F';
    backgroundColor = 'rgba(40, 199, 111, 0.16)';
  }
  else if (priority === 'Cancelada') {
    color = '#7367F0';
    backgroundColor = 'rgba(115, 103, 240, 0.16)';
  }
  else {
    // Tratamento padrão caso a prioridade não seja reconhecida
    color = 'black';
    backgroundColor = 'white';
  }

  return { color, backgroundColor };
};




const DetailsPage = ({ match }) => {
  // Usar o ID da URL para obter os detalhes do cliente
  // const clientId = match.params.id;
  const [activePage, setActivePage] = useState('pageName'); 
  
    const handleButtonClick = (pageName: string) => {
      setActivePage(pageName);
    };
  
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: 'nota', headerName: 'Nota', width: 250,

    },
    {
      field: 'pdf', headerName: 'PDF', width: 80, align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <div style={{
          color: '#818482',
          backgroundColor: 'rgba(247.76, 88.24, 66.48, 0.16)',
          padding: '2px',
          borderRadius: '5px',
          width: '95px',
          textAlign: 'center'
        }}>
          {params.value}
        </div>
      ),
    },
    {
      field: 'date', headerName: 'Data', type: 'date', width: 190, align: 'center',
      headerAlign: 'center',
      valueGetter: (params: GridValueGetterParams) => {
        // Convert the string date to a Date object
        return params.row.date ? new Date(params.row.date) : null;
      },
    },
    {
      field: 'status-payment', headerName: 'Status De Pagamento', width: 250, align: 'center',
      headerAlign: 'center',
      renderCell: (params) => {
        return (
          <div style={{
            color: getPriorityStyles(params.value).color,
            backgroundColor: getPriorityStyles(params.value).backgroundColor,
            padding: '3px 10px',
            borderRadius: '5px',
            textAlign: 'center'
          }}>

            {params.value}
          </div>
        )
      }
    },

    {
      field: 'spending', headerName: 'Gastos', type: 'number', width: 130, align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <div style={{
          padding: '2px',
          borderRadius: '5px',
          width: '95px',
          textAlign: 'center'
        }}>
          {params.value}
        </div>
      ),
    },
    {
      field: 'acao',
      headerName: 'Ação',
      width: 100,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => {
        return (
          <div>
            <IconButton size='small' style={{
              color: '#000', borderRadius: '50%'
            }}>
              <DotsVertical className={undefined} />
            </IconButton>
          </div>
        );
      },
    },
  ];


  return (
    <div style={{ width: '94%', height: '80%', flexDirection: 'column', paddingLeft: '5%', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'inline-flex' }}>
      <div>
        <Button size='small' onClick={() => navigate(-1)}>
          Voltar
        </Button>
      </div>
      <div style={{ width: '98%', height: 30, justifyContent: 'space-between', alignItems: 'center', display: 'flex', padding:15 }}>

        <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 0, display: 'flex', lineHeight: 0 }}>
          <p style={{ color: 'black', fontSize: 22, fontFamily: 'sans-serif', fontWeight: '500', wordWrap: 'break-word', }}>Cliente ID #634759</p>
          <span style={{ alignSelf: 'stretch', color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '400', wordWrap: 'break-word' }}>Ago 17, 2020, 5:48 (ET)</span>
        </div>

        <div style={{ display: 'flex' }}>
          <Button variant='outlined' color='error' style={{ color: '#EA5451', background:'rgba(234, 84, 85, 0.16)' }} >Deletar Cliente</Button>
        </div>

      </div>

      <div style={{ justifyContent: 'space-between', alignItems: 'flex-start', gap: 1, display: 'inline-flex'}}>

        {/* Lado Esquerdo  */}
        <div style={{ width: 360, height: '100%', flexDirection: 'column', 
        justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, 
        display: 'inline-flex', boxShadow: '0px 4px 18px rgba(75, 70, 92, 0.10)' }}>

          <div style={{ alignSelf: 'stretch', height: 615, background: 'white', boxShadow: '0px 4px 18px rgba(75, 70, 92, 0.10)', borderRadius: 6, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            <div style={{ alignSelf: 'stretch', height: 560, padding: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'flex' }}>
              <div style={{ alignSelf: 'stretch', height: 209, paddingTop: 3, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 1, display: 'flex' }}>

                <div style={{ width: '100%', height: 24,  justifyContent:'flex-end', display:'flex', gap:35, border:'1px green',alignItems:'center', }}>

                  <div style={{ color: 'black', fontSize: 13, fontFamily: 'sans-serif', fontWeight: '400',  wordWrap: 'break-word' }}>Prioridade:</div>

                  {/* <div style={{ height: 24, paddingLeft: 10, paddingRight: 1, paddingTop: 5, paddingBottom: 5,  background: '#F95F5F', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}> */}
                    <div style={{ padding:'5px 10px',background: '#F95F5F', borderRadius: 4,
                    color: '#E8F0EC', fontSize: 13, fontFamily: 'sans-serif', alignItems:'center',
                    fontWeight: '500',  wordWrap: 'break-word' }}>Alta</div>
                  {/* </div> */}
                </div>
                  <img style={{width: 171, height: 49}} src={ImageLogo}/>
                <div style={{ alignSelf: 'stretch', height: 114, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                  <div style={{ width: 284, textAlign: 'center', color: 'black', fontSize: 22, fontFamily: 'sans-serif', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word' }}>Queiroz Galvão</div>
                  <div style={{ color: 'black', fontSize: 13, fontFamily: 'sans-serif', fontWeight: '400', lineHeight: 0, wordWrap: 'break-word' }}>Cliente ID #634759</div>


                  <div style={{ width:'100%',paddingTop: 24, justifyContent: 'space-around',
                   alignItems: 'flex-start', gap: 10, display: 'inline-flex',}}>
                    <div style={{ justifyContent: 'space-around', alignItems: 'center', gap: 10, display: 'flex' }}>
                      <div style={{ padding: 5, background: 'rgba(115, 103, 240, 0.08)', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
                        <ShoppingCart />
                      </div>
                      <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word' }}>25</div>
                        <div style={{ color: 'black', fontSize: 13, fontFamily: 'sans-serif', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>Faturas</div>
                      </div>
                    </div>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
                      <div style={{ padding: 5, background: 'rgba(115, 103, 240, 0.08)', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'flex' }}>
                        <CurrencyDollar />
                      </div>
                      <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word' }}>R$12,378</div>
                        <div style={{ color: 'black', fontSize: 13, fontFamily: 'sans-serif', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>Gasto</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <div style={{ width:'100%',  borderRadius: 6, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', margin:'3px 0px', }}>
                <div style={{ color: 'black', fontSize: 13, fontFamily: 'sans-serif', fontWeight: '400',  wordWrap: 'break-word' }}>CONTATO</div>
                <Button variant='contained'>Adicionar</Button>
              </div>

              {/* <bloco 1 esquerdo  */}
              <div style={{ alignSelf: 'stretch', height: 190, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex',}}>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'flex' }}>

                  <div style={{ width: 284,lineHeight: 1.3 }}>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word' }}>Contato:</span>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif',  lineHeight: 1, wordWrap: 'break-word' }}>Lorine Hischke</span>
                  </div>

                  <div style={{ width: 284,lineHeight: 1.3 }}>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word' }}>Email: </span>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif',  lineHeight: 1, wordWrap: 'break-word' }}>vafgot@vultukir.org</span>
                  </div>

                  <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 1, display: 'inline-flex' }}>
                    <div style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word' }}>Status:</div>
                    <div style={{ padding: ' 10px 20px', background: 'rgba(40, 199, 111, 0.16)', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
                      <div style={{ color: '#28C76F', fontSize: 13, fontFamily: 'sans-serif', fontWeight: '500', lineHeight: 0, wordWrap: 'break-word' }}>Ativo</div>
                    </div>
                  </div>

                  <div style={{ width: 284,lineHeight: 1.3 }}>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word' }}>Contato:</span>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', lineHeight: 0, wordWrap: 'break-word' }}>(27) 99456-7890</span>
                  </div>

                  <div style={{ width: 284 ,lineHeight: 1.5}}>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word' }}>Estado: </span>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', lineHeight: 1, wordWrap: 'break-word' }}>Espírito Santo</span>
                  </div>

                  <div style={{ width: 284,lineHeight: 1 }}>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word' }}>País:</span>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', lineHeight: 0, wordWrap: 'break-word' }}>Brasil</span>
                  </div>
                </div>

                <div style={{ justifyContent: 'flex-start', display: 'inline-flex' }}>       
                      <Button size='small' style={{ color: 'white', fontFamily: 'sans-serif',background: '#BABABD',  }}>Editar detalhes</Button>
                </div>

              </div>


                {/* bloco 2 esquerdo  */}
              <div style={{ alignSelf: 'stretch', height: 190, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex', }}>
                <div style={{ alignSelf: 'stretch', height: 190, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'flex' }}>

                  <div style={{width: 284 ,lineHeight: 1.5}}>
                    <span style={{color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', lineHeight:1, wordWrap: 'break-word'}}>Contato:  </span>
                            <span style={{color: 'black', fontSize: 15,  fontFamily: 'sans-serif', fontWeight: '400', lineHeight:1, wordWrap: 'break-word'}}>Marcio Fraga</span>
                            </div>

                            <div style={{width: 284 ,lineHeight: 1.5}}>
                              <span style={{color: 'black', fontSize: 15, 
                            fontFamily: 'sans-serif', fontWeight: '600', lineHeight:1, wordWrap: 'break-word'}}>Email:  </span><span style={{color: 'black', fontSize: 15, 
                            fontFamily: 'sans-serif', fontWeight: '400', lineHeight:1, wordWrap: 'break-word'}}>fraga@vultukir.org</span>
                            </div>

                  <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 1, display: 'inline-flex' }}>
                    <div style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word' }}>Status:</div>
                    <div style={{ padding: ' 10px 20px', background: 'rgba(40, 199, 111, 0.16)', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
                      <div style={{ color: '#28C76F', fontSize: 13, fontFamily: 'sans-serif', fontWeight: '500', lineHeight: 0, wordWrap: 'break-word' }}>Ativo</div>
                    </div>
                  </div>

                  <div style={{width: 284 ,lineHeight: 1.5}}>
                    <span style={{color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', lineHeight:0, wordWrap: 'break-word'}}>Contato:  </span>
                    <span style={{color: 'black', fontSize: 15,  fontFamily: 'sans-serif', fontWeight: '400', lineHeight:0, wordWrap: 'break-word'}}>(27) 99446-7890</span>
                  </div>

                  <div style={{ width: 284,lineHeight: 1.5 }}>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word' }}>Estado:  </span>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '400', lineHeight: 0, wordWrap: 'break-word' }}>Espírito Santo</span>
                  </div>

                  <div style={{ width: 284 ,lineHeight: 1.3}}>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word' }}>País:  </span>
                    <span style={{ color: 'black', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '400', lineHeight: 0, wordWrap: 'break-word' }}>Brasil</span>
                  </div>

                </div>
                <div style={{ justifyContent: 'flex-start', display: 'inline-flex' }}>       
                      <Button size='small' style={{ color: 'white', fontFamily: 'sans-serif',background: '#BABABD',  }}>Editar detalhes</Button>
                </div>

              </div>

            </div>
          </div>
        </div>



        {/* wrap tabela lado direito  */}
        <div style={{ flex: '1 1 0', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'inline-flex' }}>
          {/* 
                secção Geral endereço pagamento  */}
          <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', height: 50, gap:15}}>

            <div style={{ background: '#7367F0',  borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', display: 'flex',height:35  }}>
              <div style={{ paddingLeft: 2, paddingRight: 2, paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex' }}>
                <Button size='small' 
                 className={activePage === 'Atendimento' ? 'blueButton' : 'grayButton'}
                 onClick={() => handleButtonClick('Atendimento')}
                >Geral</Button>
              </div>
            </div>
            <div style={{ background: '#BABABD',borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', display: 'flex',height:35 }}>
              <div style={{ paddingLeft: 2, paddingRight: 2, paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex' }}>
                <Button  size='small' style={{ color: 'white', height:'100%' }}>Endereço e Pagamento </Button>
              </div>
            </div>

            <div style={{background: '#BABABD',  borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', display: 'flex',height:35  }}>
              <div style={{ paddingLeft: 2, paddingRight: 2, paddingTop: 10, paddingBottom: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 1, display: 'flex' }}>
                <Button size='small' style={{ color: 'white', height:'100%',width:'100%' }}>Notificação</Button>
              </div>
            </div>
          </div>

          <div style={{ alignSelf: 'stretch', height: 560, background: 'white', boxShadow: '1px 2px 1px rgba(75, 70, 92, 0.10)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            <div style={{ alignSelf: 'stretch', height: 560, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>

              {/* Header receita e search  */}
              <div style={{height: 50, alignSelf: 'stretch', boxShadow: '0px 4px 18px rgba(75, 70, 92, 0.10)',
              padding: 10, justifyContent: 'flex-start', 
              alignItems: 'center', display: 'inline-flex',fontFamily:'sans-serif' }}>
                <div style={{ fontFamily:'sans-serif',flex: '1 1 0', color: 'black', fontSize: 18, fontWeight: '500', lineHeight: 2, wordWrap: 'break-word' }}>Receita</div>
                <div style={{ height: 38, background: 'white', borderRadius: 6, border: '1px #DBDADE solid', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                  <input placeholder='Search Order' style={{ height: 38, background: 'white', borderRadius: 6,
                   border: '1px #DBDADE solid', justifyContent: 'flex-start', alignItems: 'end', display: 'flex',textAlign:'left' }} type="text" />
                </div>
              </div>

              <div style={{ height: 490, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  checkboxSelection
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
