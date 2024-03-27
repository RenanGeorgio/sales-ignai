import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Navbar from "@components/Navbar";
import dragEnd from "@helpers/dragEnd";
import LeadModal from "@components/Modal/LeadModal";
import SearchFilter from "@components/Table/searchFilter";
import LeadPopover from "@components/Popover/LeadPopover";
import { authApi } from "@services";
import { leadsActions } from "@store/store";
import { IconButton } from "@mui/material";
import { VerticalDotsIcon } from "@icons";
import { Obj, DragResult } from "@types";
import "@styles/leads.module.css";

const Leads = () => {
  const leadsData = useSelector((state: any) => state.leads);

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showKanban, setShowKanban] = useState<boolean>(false);
  const [columnName, setColumnName] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");
  const [columns, setColumns] = useState<any[]>(leadsData);
  const [cardInfo, setCardInfo] = useState<Obj>({});

  const dispatch = useDispatch();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if(leadsData){
      setColumns(leadsData);
    }
  }, [leadsData]);

  const onDragEnd = (result: DragResult) => {
    const newColumns = dragEnd(columns, result);

    if (newColumns) {
      const checkDif = newColumns.filter((x) => !columns.includes(x));

      (async () => {
        const response = await authApi.put(`/leads`, { leads: checkDif });

        if (response.status === 204) {
          dispatch(leadsActions.updateLeads(newColumns));
          setColumns(newColumns);
        }
      })();
    }
  };

  const handleShowKanban = () => {
    setShowKanban(true);
  };

  const handleShowList = () => {
    setShowKanban(false);
  };

  const addNewColumn = () => {
    if (columnName === "") {
      return;
    }

    const newColumn = {
      title: columnName,
      items: [],
    };

    (async () => {
      const response = await authApi.post("/leads", newColumn);

      if (response?.status === 201) {
        const newColumns = [...columns, response.data];

        dispatch(leadsActions.updateLeads(newColumns));
        setColumns(newColumns);
      }
    })();
  };

  const addNewCard = (id: string) => {
    if (cardName === "") {
      return;
    }

    (async () => {
      const response = await authApi.post(`/leads/${id}/items`, {
        title: cardName
      });
  
      const newColumns = columns.map((column) => {
        if (column._id === id) {
          column = response.data;
        }
  
        return column;
      });
  
      setCardName("");
      dispatch(leadsActions.updateLeads(newColumns));
      setColumns(newColumns);
    })();
  };

  const updateCardInfo = (values: {
    title: string;
    _id: string;
    comments: string;
  }) => {
    const { _id, title, comments } = values;

    (async () => {
      const response = await authApi.put(`/leads/card/${_id}`, {
        title,
        comments
      });
  
      if (response.status === 200) {
        const data = response.data;
  
        const cardIndex = columns.findIndex((column) => column._id === data._id);
        const newColumns = [...columns];
  
        newColumns.splice(cardIndex, 1, data);
  
        dispatch(leadsActions.updateLeads(newColumns));
        setColumns(newColumns);
        setIsModalOpen(false);
      }
    })();
  };

  const handleModalOpen = (info: Obj) => {
    setCardInfo(info);
    setIsModalOpen(true);
  };

  return (
    <div className="page-content">
      <Navbar />
      {showKanban ? (
        <SearchFilter setShowList={handleShowList} leadsData={leadsData} />
      ) : (
        <div className="leads-kanban">
          <div className="kanbanHead">
            <div className="button-group">
              <LeadPopover cardClassName='' title="+ Coluna" handleClick={addNewColumn}>
                <input
                style={{width:'100%'}}
                  type="text"
                  placeholder="Nova Coluna"
                  onChange={(e) => {
                    setColumnName(e.target.value);
                  }}
                />
                {/* <IconButton size="small" style={{border:'1px solid black', display:'flex'}} onClick={()=>handleClick}>+</IconButton> */}
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
          </div>
          {/* @ts-ignore */}
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="board-container">
              {columns?.map((column, key) => (
                <div className="kanban-column" key={key}>
                  <div className="headerColumn">
                    <h1 className="card-title">{column.title}</h1>
                    <IconButton size="small"> <VerticalDotsIcon className={undefined}/></IconButton>
                  </div>
                  {isMounted ? (
                    <Droppable droppableId={column._id} key={key}>
                      {(provided) => (
                        <div className="column-content" ref={provided.innerRef}>
                          {provided.placeholder}
                          {column.items?.map((item: any, index: number) => (
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
                                    backgroundColor: "#fff",
                                    margin: "0 0 10px",
                                    padding: "10PX",
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
                      )}
                    </Droppable>
                  ) : null}
                  <LeadPopover
                    cardClassName='popLead'
                    title="+ Card"
                    handleClick={() => addNewCard(column._id)}
                  >
                    <input
                      style={{width:'95%'}}
                      type="text"
                      placeholder="Novo Card"
                      onChange={(e) => {
                        setCardName(e.target.value);
                      }}
                    />
                  </LeadPopover>
                </div>
              ))}
            </div>
          </DragDropContext>
          {isModalOpen && (
            <LeadModal
              closeModal={() => setIsModalOpen(false)}
              // @ts-ignore
              handleClick={updateCardInfo}
              data={cardInfo}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Leads;