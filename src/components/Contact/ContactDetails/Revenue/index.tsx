import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import rows from "../../../../dados/data2.json";
import { IconButton } from "@mui/material";
import { DotsVertical } from "components/Image/icons";
import { getPaymentStatusStyles } from "helpers/status";

const columns: GridColDef[] = [
  {
    field: "nota",
    headerName: "Nota",
    width: 250,
  },
  {
    field: "pdf",
    headerName: "PDF",
    width: 80,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <div
        style={{
          color: "#818482",
          backgroundColor: "rgba(247.76, 88.24, 66.48, 0.16)",
          padding: "2px",
          borderRadius: "5px",
          width: "95px",
          textAlign: "center",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    field: "date",
    headerName: "Data",
    type: "date",
    width: 190,
    align: "center",
    headerAlign: "center",
    valueGetter: (params: GridValueGetterParams) => {
      // Convert the string date to a Date object
      return params.row.date ? new Date(params.row.date) : null;
    },
  },
  {
    field: "status-payment",
    headerName: "Status De Pagamento",
    width: 250,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      const { color, backgroundColor } = getPaymentStatusStyles(params.value);
      return (
        <div
          style={{
            color: color,
            backgroundColor: backgroundColor,
            padding: "3px 10px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {params.value}
        </div>
      );
    },
  },

  {
    field: "spending",
    headerName: "Gastos",
    type: "number",
    width: 130,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <div
        style={{
          padding: "2px",
          borderRadius: "5px",
          width: "95px",
          textAlign: "center",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    field: "acao",
    headerName: "Ação",
    width: 100,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <div>
          <IconButton
            size="small"
            style={{
              color: "#000",
              borderRadius: "50%",
            }}
          >
            <DotsVertical className={undefined} />
          </IconButton>
        </div>
      );
    },
  },
];


const Revenue = () => {
  return (
    <div
    style={{
      alignSelf: "stretch",
      height: 560,
      background: "white",
      boxShadow: "1px 2px 1px rgba(75, 70, 92, 0.10)",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      display: "flex"
    }}
  >
    <div
      style={{
        alignSelf: "stretch",
        height: 560,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        display: "flex"
      }}
    >
      {/* Header receita e search  */}
      <div
        style={{
          height: 50,
          alignSelf: "stretch",
          boxShadow: "0px 4px 18px rgba(75, 70, 92, 0.10)",
          padding: 10,
          justifyContent: "flex-start",
          alignItems: "center",
          display: "inline-flex",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            flex: "1 1 0",
            color: "black",
            fontSize: 18,
            fontWeight: "500",
            lineHeight: 2,
            wordWrap: "break-word",
          }}
        >
          Receita
        </div>
        <div
          style={{
            height: 38,
            background: "white",
            borderRadius: 6,
            border: "1px #DBDADE solid",
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
          }}
        >
          <input
            placeholder="Search Order"
            style={{
              height: 38,
              background: "white",
              borderRadius: 6,
              border: "1px #DBDADE solid",
              justifyContent: "flex-start",
              alignItems: "end",
              display: "flex",
              textAlign: "left",
            }}
            type="text"
          />
        </div>
      </div>

      <div style={{ height: 490, width: "100%" }}>
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
  </div>
  );
};

export default Revenue;