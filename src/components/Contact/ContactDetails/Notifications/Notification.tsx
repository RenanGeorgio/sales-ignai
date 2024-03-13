import { Button, IconButton } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DotsVertical, ExportIcon } from '../../../Image/icons';
import rows from '../../../../dados/data3.json';

type Priority = 'Em andamento' | 'Pendente' | 'Concluído' | 'Cancelada' | undefined;

const getPriorityStyles = (priority: Priority) => {
  let color: string = "";
  let backgroundColor: string = "";

  if (priority === 'Em andamento') {
    color = '#FF9F43';
    backgroundColor = 'rgba(255, 159, 67, 0.16)';
  } else if (priority === 'Pendente') {
    color = '#FFFFFF';
    backgroundColor = '#FF6868';
  } else if (priority === 'Concluído') {
    color = '#28C76F';
    backgroundColor = 'rgba(40, 199, 111, 0.16)';
  } else if (priority === 'Cancelada') {
    color = '#7367F0';
    backgroundColor = 'rgba(115, 103, 240, 0.16)';
  } else { // Tratamento padrão caso a prioridade não seja reconhecida
    color = 'black';
    backgroundColor = 'white';
  }

  return { color, backgroundColor };
};

const TextAreaCell = ({ value }: any) => {
  return (
    <textarea 
      readOnly 
      style={{border: 'none ', resize:'none', background:''}}
      value={value} 
    />
  );
};

const columns: GridColDef[] = [
  {
    field: 'attendant', 
    headerName: 'Atendente', 
    width: 180
  },
  {
    field: 'summary', 
    headerName: 'Resumo', 
    width: 260, 
    align: 'center',
    headerAlign: 'center',
    renderCell: (params) => (
      <div style={{
        color: '#818482',
        padding: '2px',
        borderRadius: '5px',
        textAlign: 'center'
      }}>
        <TextAreaCell value={params.value} />
      </div>
    )
  },
  {
    field: 'date', 
    headerName: 'Data', 
    type: 'date', 
    width: 190, 
    align: 'center',
    headerAlign: 'center',
    valueGetter: (params: GridValueGetterParams) => {
      return params.row.date ? new Date(params.row.date) : null;
    }
  },
  {
    field: 'status', 
    headerName: 'Status', 
    width: 250, 
    align: 'center',
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
    field: 'acao',
    headerName: 'Ação',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params) => {
      return (
        <div>
          <IconButton size='small' style={{color: '#000', borderRadius: '50%'}}>
            <DotsVertical className={undefined} />
          </IconButton>
        </div>
      );
    }
  }
];

export default function Notification() {
  return (
    <div style={{width: '100%', height: '100%', paddingTop: 24, paddingLeft:5, paddingBottom: 24, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
      {/* Header receita e search  */}
      <div style={{height: 50, alignSelf: 'stretch', boxShadow: '0px 4px 18px rgba(75, 70, 92, 0.10)', padding: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', fontFamily: 'sans-serif'}}>
        <div style={{ height: 38, background: 'white', borderRadius: 6, border: '1px #DBDADE solid', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
          <input placeholder='Search Order' style={{height: 38, background: 'white', borderRadius: 6, border: '1px #DBDADE solid', justifyContent: 'flex-start', alignItems: 'end', display: 'flex', textAlign: 'left'}} type="text" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15, padding: 15 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15, height: '100%' }}>
            <select style={{ display: 'flex', justifyContent: 'center', height: '2rem', width: '5rem', padding: '5px 10px 5px 5px', borderRadius: '5px' }}>
              <option selected>10</option>
              <option >20</option>
              <option >30</option>
              <option >40</option>
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15, height: '100%' }}>
            <select style={{ display: 'flex', justifyContent: 'center', height: '2rem', width: '5rem', padding: '5px 10px 5px 5px', borderRadius: '5px' }}>
              <option selected>All</option>
              <option >20</option>
              <option >30</option>
              <option >40</option>
            </select>
          </div>
          <div>
            <Button style={{
             background: '#BABABD',
              boxShadow: '0px 2px 4px rgba(165, 163, 174, 0.30)',
              borderRadius: 6,
              display: 'flex',
              color: '#fff'
            }}>
              <ExportIcon/>
              Export
            </Button>
          </div>
        </div>
      </div>
      <div style={{ height: 490, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 7 }
            }
          }}
          pageSizeOptions={[7]}
          isCellEditable={(params) => params.row.Contato % 2 === 0}
        />
      </div>
    </div>
  );
}