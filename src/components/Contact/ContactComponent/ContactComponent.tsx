import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Avatar, Button, IconButton, colors } from "@mui/material";
import {
  DotsVertical,
  Edit,
  MessageDots,
  PaperClip,
  Plus,
  Trash,
} from "../../Image/icons";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStatusStyles, priorityStatus, getPriorityStyles } from "helpers/status";

const ContatoCell = ({ name, email, tel }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontWeight: "bold", color: "gray" }}>{name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>
          {email} {tel}
        </div>
      </div>
    </>
  );
};

export default function ContactComponent() {
  const [checkboxSelection, setCheckboxSelection] = React.useState(true);
  const clients = useSelector((state: any) => state.clients);

  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Cliente-Conta",
      minWidth: 350,
      width: 450,
      renderCell: (params) => {
        const row = params.row;
        return (
          <div style={{ cursor: "pointer", color: "rgba(75, 70, 92, 1)" }}>
            <ContatoCell name={row?.name} email={row?.email} tel={row?.tel} />
          </div>
        );
      },
    },
    {
      field: "priority",
      headerName: "Prioridade",
      width: 230,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        const { color, backgroundColor } = getPriorityStyles(params.value);
        return (
          <div
            style={{
              color: color,
              backgroundColor: backgroundColor,
              border: "1px solid",
              padding: "2px",
              borderRadius: "5px",
              width: "95px",
              textAlign: "center",
            }}
          >
            {priorityStatus[params.value]}
          </div>
        );
      },
    },
    {
      field: "sector",
      headerName: "Setor",
      width: 190,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "document",
      headerName: "Documentos",
      width: 250,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div>
            <IconButton size="small" aria-label="upload document">
              <PaperClip />{" "}
            </IconButton>
            {params.value}
            <IconButton size="small">
              {" "}
              <MessageDots />
            </IconButton>
            {params.value}
          </div>
        );
      },
    },

    {
      field: "status",
      headerName: "Status",
      width: 130,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <div
          style={{
            color: getStatusStyles(params.value).color,
            // backgroundColor: getStatusStyles(params.value)
            border: "1px solid",
            padding: "2px",
            borderRadius: "5px",
            width: "95px",
            textAlign: "center",
          }}
        >
          {params.value ? "Ativo" : "Inativo"}
        </div>
      ),
    },
    {
      field: "acao",
      headerName: "Ação",
      width: 160,
      align: "right",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div>
            <IconButton>
              <Edit />
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
              <DotsVertical className={undefined} />
            </IconButton>
          </div>
        );
      },
    },
  ];
  return (
    <div
      style={{
        overflow: "hidden",
        height: "100%",
        paddingTop: 2,
        paddingBottom: 24,
        paddingLeft: 90,
        paddingRight: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 1,
        display: "flex",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          paddingLeft: 4,
          paddingRight: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "inline-flex",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "rgba(75, 70, 92, 1)",
            fontSize: 18,
            fontFamily: "sans-serif",
            marginBottom: -10,
            marginTop: 20,
            fontWeight: "100",
            lineHeight: 1,
            wordWrap: "break-word",
          }}
        >
          Filtro de busca
        </div>
      </div>

      <div
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          display: "flex",
          width: "98%",
          padding: "15px 0px 15px 1px",
        }}
      >
        <div
          style={{
            flex: "1 ",
            height: 38,
            borderRadius: 6,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "flex",
            width: "100px",
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              height: 38,
              background: "white",
              borderRadius: 6,
              overflow: "hidden",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <form style={{ width: "100%", height: "95%" }}>
              <select
                style={{
                  width: "80%",
                  height: "100%",
                  borderRadius: 6,
                  borderColor: "#babfc4",
                  color: "#babfc4",
                }}
              >
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
        <div
          style={{
            flex: "1 1 0",
            height: 38,
            borderRadius: 6,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              height: 38,
              background: "white",
              borderRadius: 6,
              overflow: "hidden",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <form style={{ width: "100%", height: "95%" }}>
              <select
                style={{
                  margin: 1,
                  width: "80%",
                  height: "100%",
                  borderRadius: 6,
                  borderColor: "#babfc4",
                  color: "#babfc4",
                }}
              >
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
        <div
          style={{
            flex: "1 1 0",
            height: 38,
            borderRadius: 6,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              height: 38,
              background: "white",
              borderRadius: 6,
              overflow: "hidden",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <form style={{ width: "80%", height: "95%" }}>
              <select
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 6,
                  borderColor: "#babfc4",
                  color: "#babfc4",
                }}
              >
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

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "99%",
          borderTop: "1px #DBDADE solid",
          padding: "15px 5px 5px 1px",
        }}
      >
        <div style={{ paddingLeft: 10 }}>
          <select
            style={{
              width: "5rem",
              padding: 10,
              borderRadius: 6,
              borderColor: "#babfc4",
              color: "#4b465cae",
            }}
          >
            <option selected>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
          </select>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            columnGap: 10,
            paddingRight: 5,
          }}
        >
          <form>
            <select
              style={{
                width: "10rem",
                padding: 10,
                borderRadius: 6,
                borderColor: "#babfc4",
                color: "#4b465cae",
              }}
            >
              <option value="" selected>
                <span>Assinados a mim</span>
              </option>
              <option value={10}>Twenty</option>
              <option value={21}>Twenty one</option>
              <option value={22}>Twenty one and a half</option>
            </select>
          </form>
          <input
            title="Buscar"
            placeholder="Buscar"
            style={{
              height: 33,
              background: "white",
              borderRadius: 6,
              border: "1px #DBDADE solid",
              justifyContent: "flex-start",
              alignItems: "center",
              display: "flex",
            }}
          />

          <div>
            <Button
              style={{
                background: "#7367F0",
                boxShadow: "0px 2px 4px rgba(165, 163, 174, 0.30)",
                borderRadius: 6,
                color: "#fff",
              }}
            >
              <div
                style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
              >
                <div>+</div>
                <div>Adicionar</div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div style={{ height: 470, width: "100%", minWidth: 400 }}>
        <DataGrid
          rows={clients}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 7 },
            },
          }}
          pageSizeOptions={[7]}
          isCellEditable={(params) => params.row.Contato % 2 === 0}
          onCellDoubleClick={(params, event) => {
            navigate(`/contact/details`, { state: params.row });
          }}
          sx={{
            "& .MuiDataGrid-columnHeader": {
              textTransform: "uppercase",
              fontWeight: 100,
              color: "#4b465cae",
            },
          }}
        />
      </div>
    </div>
  );
}
