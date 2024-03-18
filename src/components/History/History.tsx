import { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams, GRID_DATETIME_COL_DEF, GRID_DATE_COL_DEF } from "@mui/x-data-grid";
import { Button, FormControl, InputLabel, MenuItem, Select, IconButton, Modal } from "@mui/material";
import { VerticalDotsIcon, EditIcon, TrashIcon } from "@icons";
import ModalHistory from "./ModalHistory";
import rows from "../../dados/data.json";

type Contact = {
    name: string;
    description: string;
}

interface ContactProp {
    contato: Contact;
    children?: React.ReactNode;
};

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

const getStatusStyles = (status: string) => {
    const color = status === 'pendente' ? 'red' : 'green';
    const backgroundColor = status === 'pendente' ? '#ffadad' : 'lightgreen';

    return { color, backgroundColor };
};

const columns: GridColDef[] = [
    {
        field: 'contato', 
        headerName: 'Contato', 
        width: 300,
        renderCell: (params) => {
            return <ContatoCell contato={params.value} />;
        }
    },
    { 
        field: 'assunto', 
        headerName: 'Assunto', 
        width: 280 
    },
    {
        field: 'date', 
        headerName: 'Data', 
        type: 'date', 
        width: 190,
        valueGetter: (params: GridValueGetterParams) => {
            return params.row.date ? new Date(params.row.date) : null;
        }
    },
    { 
        field: 'ticket', 
        headerName: 'Ticket', 
        width: 230 
    },
    {
        field: 'status', 
        headerName: 'Status', 
        width: 230,
        renderCell: (params) => (
            <div style={{
                color: getStatusStyles(params.value).color,
                backgroundColor: getStatusStyles(params.value).backgroundColor,
                border: '1px solid',
                padding: '2px',
                borderRadius: '5px'
            }}>
                {params.value}
            </div>
        ),
    },
    {
        field: 'acao',
        headerName: 'Ação',
        width: 160,
        renderCell: (params) => {
            return (
                <div>
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        color="primary"
                        size="small"
                        onClick={() => {}}
                    >
                        <TrashIcon className={undefined} />
                    </IconButton>
                    <IconButton>
                        <VerticalDotsIcon className={undefined} />
                    </IconButton>
                </div>
            );
        }
    }
];

export default function HistoryComponent() {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={{ width: '94%', height: '100%', paddingTop: 2, paddingBottom: 24, paddingLeft: 80, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 1, display: 'inline-flex' }}>
            <div style={{ borderRadius: 6, overflow: 'hidden', justifyContent: 'end', alignItems: 'flex-start', display: 'flex', width: '100%' }}>
                <div style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5, paddingLeft: 10, paddingRight: 10, background: '#DEDBFC', borderRight: '1px rgba(115, 103, 240, 0.24) solid', justifyContent: 'end', alignItems: 'center', display: 'flex' }}>
                    <Button>meus</Button>
                </div>
                <div style={{ paddingLeft: 10, paddingRight: 10, background: '#E8E6FC', justifyContent: 'end', alignItems: 'center', display: 'flex' }}>
                    <Button>Todos</Button>
                </div>
            </div>
            <div style={{ justifyContent: 'space-between', alignItems: 'center', gap: 24, display: 'flex', width: '98%', padding: '5px 0px 1px 10px' }}>
                <div style={{ flex: '1 ', height: 38, borderRadius: 6, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', width: '100px' }}>
                    <div style={{ flex: '1 1 0', height: 38, background: 'white', borderRadius: 6, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                        <form style={{ width: '100%', height: '95%' }}>
                            <select style={{ width: '80%', height: '100%', borderRadius: 6, }}>
                                <option value="" selected>
                                    <em>None</em>
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
                                    <em>None</em>
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
                                    <em>None</em>
                                </option>
                                <option value={10}>Twenty</option>
                                <option value={21}>Twenty one</option>
                                <option value={22}>Twenty one and a half</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ alignSelf: 'stretch', paddingLeft: 4, paddingRight: 1, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', width: '100%' }}>
                <div style={{ color: 'black', fontSize: 18, fontFamily: 'sans-serif', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word' }}>Filtro de busca</div>
            </div>
            <div style={{ flex: '1 1 0', height: 38, justifyContent: 'space-between', alignItems: 'center', gap: 16, display: 'flex', width: '100%', borderTop: '1px #DBDADE solid', padding: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15, height: '100%' }}>
                    <select style={{ display: 'flex', justifyContent: 'center', height: '2rem', width: '5rem', padding: '5px 10px 5px 5px', borderRadius: '5px' }}>
                        <option selected>10</option>
                        <option >20</option>
                        <option >30</option>
                        <option >40</option>
                    </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 15, padding: 15 }}>
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
                            display: 'flex'
                        }}
                            onClick={handleOpen}
                        >
                            Adicionar
                        </Button>
                    </div>
                </div>
            </div>
            <div style={{ height: 370, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 }
                        }
                    }}
                    pageSizeOptions={[5, 10]}
                    isCellEditable={(params) => params.row.Contato % 2 === 0}
                />
            </div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                    <ModalHistory close={handleClose} />
            </Modal>
        </div>
    );
}