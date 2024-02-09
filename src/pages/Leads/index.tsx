import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Navbar from "../../components/Navbar";
import dragEnd from "../../helpers/dragEnd";
import LeadModal from "../../components/Modal/leadModal";
import SearchFilter from "../../components/Table/searchFilter";
import "../../styles/leads.css";
import LeadPopover from "../../components/Popover/leadPopover";
import { useSelector } from "react-redux";
import authApi from "../../services/auth";
import { useDispatch } from "react-redux";
import { leadsActions } from "../../store/store";
import { IconButton } from "@mui/material";

const Leads = () => {
  const leadsData = useSelector((state: any) => state.leads);
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showKanban, setShowKanban] = useState(false);
  const [columnName, setColumnName] = useState("");
  const [cardName, setCardName] = useState("");
  const [columns, setColumns] = useState(leadsData);
  const [cardInfo, setCardInfo] = useState({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onDragEnd = async (result) => {
    const newColumns = dragEnd(columns, result);
    if (newColumns) {
      const checkDif = newColumns.filter((x) => !columns.includes(x));
      const response = await authApi.put(`/leads`, { leads: checkDif });
      if (response.status === 204) {
        dispatch(leadsActions.updateLeads(newColumns));
        setColumns(newColumns);
      }
    }
  };

  const handleShowKanban = () => {
    setShowKanban(true);
  };

  const handleShowList = () => {
    setShowKanban(false);
  };

  const addNewColumn = async () => {
    if (columnName === "") return;
    const newColumn = {
      title: columnName,
      items: [],
    };

    const response = await authApi.post("/leads", newColumn);
    if (response.status === 201) {
      const newColumns = [...columns, response.data];
      dispatch(leadsActions.updateLeads(newColumns));
      setColumns(newColumns);
    }
  };

  const addNewCard = async (id: string) => {
    if (cardName === "") return;
    const response = await authApi.post(`/leads/${id}/items`, {
      title: cardName,
    });
    const newColumns = columns.map((column) => {
      if (column._id === id) {
        column = response.data;
      }
      return column;
    });

    dispatch(leadsActions.updateLeads(newColumns));
    setColumns(newColumns);
  };

  const updateCardInfo = async (values: {
    title: string;
    _id: string;
    comments: string;
  }) => {
    const { _id, title, comments } = values;
    const response = await authApi.put(`/leads/card/${_id}`, { title, comments });

    if (response.status === 200) {
      const data = response.data;
      const cardIndex = columns.findIndex((column) => column._id === data._id);
      const newColumns = [...columns];
      newColumns.splice(cardIndex, 1, data);
      dispatch(leadsActions.updateLeads(newColumns));
      setColumns(newColumns);
      setIsModalOpen(false);
    }

  };

  const handleModalOpen = (info) => {
    setCardInfo(info);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Navbar />
      {showKanban ? (
        <SearchFilter setShowList={handleShowList} leadsData={leadsData} />
      ) : (
        <div className="leads-kanban">
          <div className="button-group">
            <LeadPopover title="+ Coluna" handleClick={addNewColumn}>
              <input
                type="text"
                placeholder="Nova Coluna"
                onChange={(e) => {
                  setColumnName(e.target.value);
                }}
              />
            </LeadPopover>
            <div className="divider"></div>
            <button onClick={handleShowKanban}>Ver Lista</button>
            <div className="divider"></div>
            <button>Editar</button>
          </div>
          <div className="select-box">
            <select className="select-box">
              <option>Assignados a mim</option>
              <option>Todos</option>
            </select>
          </div>
          <div className="board-container">
            <DragDropContext onDragEnd={onDragEnd}>


              {columns?.map((column, key) =>
                isMounted ? (
                  <Droppable droppableId={column._id} key={key}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          borderRadius: "10px",
                          margin: "10px",
                          padding: "0px",
                          backgroundColor: "rgb(254 254 254)",
                          boxShadow:
                            "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                        }}
                        key={key}
                      >
                        <div style={{ display: 'flex', gap: '1px', width: '100%', justifyContent: 'space-between', paddingLeft: 10, height:53 }}>
                          <h2 style={{
                            height: 'min-content',
                            margin: 0, marginTop: 5,
                            marginBottom: 20, textAlign: 'left',
                            display: 'flex'
                          }}>{column.title}</h2>
                          <div style={{ display: 'flex', justifyContent: 'end', gap: '1px', alignItems: 'baseline', margin: 0, paddingRight: 10 }}>
                            <IconButton size="small" style={{ width: 25, height: 30 }}>
                              {/* <DotsHorizonIcon /> */}
                              </IconButton>                         </div>

                        </div>
                        {/* <button
                          id={column._id}
                          onClick={(e) => {
                            handleModalOpen(e);
                          }}
                        >
                          Add Item
                        </button> */}                       
                        <div className="column-content">
                          {provided.placeholder}
                          {column.items?.map((item, index) => (
                            <Draggable
                              draggableId={item._id}
                              key={item._id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  style={{
                                    height:'30px',
                                    backgroundColor: "#fff",
                                    marginBottom: "14px",
                                    marginTop:'10px',
                                    alignItems:'flex-start',
                                    textWrap:'wrap',
                                    padding: "10px",
                                    boxShadow:
                                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                    borderRadius: "5px",
                                    ...provided.draggableProps.style,
                                  }}
                                  onDoubleClick={() => handleModalOpen(item)}
                                >
                                  {item.title}
                                </div>
                              )}
                            </Draggable>
                          ))}
                        </div>

                        <div style={{ display: 'flex', height:50, justifyContent:'flex-start', width:'100%', alignItems:"center"}}>
                          <LeadPopover
                            title="+ Card"
                            handleClick={() => addNewCard(column._id)}

                          >
                            <input
                              type="text"
                              placeholder="Novo Card"
                              onChange={(e) => {
                                setCardName(e.target.value);
                              }}
                            />
                          </LeadPopover>
                        </div>
                      </div>
                    )}
                  </Droppable>
                ) : null
              )}
            </DragDropContext>
            {isModalOpen && (
              <LeadModal
                closeModal={() => setIsModalOpen(false)}
                handleClick={updateCardInfo}
                data={cardInfo}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads;
