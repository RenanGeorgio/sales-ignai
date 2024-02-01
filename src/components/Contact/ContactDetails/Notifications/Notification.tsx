import { IconButton } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import React from 'react'
import { DotsVertical } from '../../../Image/icons';
import rows from '../../../../dados/data2.json'

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
            // color: getPriorityStyles(params.value).color,
            // backgroundColor: getPriorityStyles(params.value).backgroundColor,
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

export default function Notification() {
  return (
    <div style={{width: '100%', height: '100%', paddingTop: 24, paddingBottom: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
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
                
                />
              </div>
    </div>
  )
}
