// import React, { useEffect, useState } from "react";
// import clip from "../../components/Image/paperclip.svg";
// import message from "../../components/Image/message-dots-gray.svg";
// import avatar from "../../components/Image/Avatar3.png";

// import "../../styles/leads.css";
// import Navbar from "../../components/Navbar";
// import LeadModal from "../../components/Modal";
// import SearchFilter from "../../components/Table/searchFilter";
// import { useSelector } from "react-redux";
// import groupedLeads from "../../helpers/groupedLeads";

// const Leads: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showKanban, setShowKanban] = useState(false);
//   const [leadsByTopic, setLeadsByTopic]: any = useState({});

//   const leadsData = useSelector((state: any) => state.leads);

//   useEffect(() => {
//     setLeadsByTopic(groupedLeads(leadsData));
//   }, [leadsData]);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleShowKanban = () => {
//     setShowKanban(true);
//   };

//   const handleShowList = () => {
//     setShowKanban(false);
//   };

//   return (
//     <>
//       <Navbar />
//       {showKanban ? (
//         <SearchFilter setShowList={handleShowList} leadsData={leadsData} />
//       ) : (
//         <div className="leads-kanban">
//           <div className="button-group">
//             <button>+ Coluna</button>
//             <div className="divider"></div>
//             <button onClick={handleShowKanban}>Ver Lista</button>
//             <div className="divider"></div>
//             <button>Editar</button>
//           </div>
//           <div className="select-box">
//             <select className="select-box">
//               <option>Assignados a mim</option>
//               <option>Todos</option>
//             </select>
//           </div>

//           <div className="kanban-columns">
//             <div className="kanban-column">
//               <h2>Contato Inicial</h2>
//               <div className="menu-icon-leads">&#8942;</div>
//               <button className="add-button">+ Adicionar</button>

//               {leadsByTopic["contact"]?.map((leadInfo: any) => (
//                 <div
//                   className="info-section contact-column"
//                   style={{ marginBottom: "10px" }}
//                   onClick={openModal}
//                   key={leadInfo?._id}
//                 >
//                   <p>{leadInfo.company}</p>
//                   <div className="icons-section">
//                     <img src={clip} alt="Ícone 1" />
//                     <span className="last-number">
//                       {leadInfo?.files.length}
//                     </span>
//                     <img src={message} alt="Ícone 2" />
//                     <span>{leadInfo?.activity.length}</span>
//                   </div>
//                   <img src={avatar} alt="Ícone 3" className="right-icon" />
//                 </div>
//               ))}
//             </div>
//             <div className="kanban-column">
//               <h2>Discussões</h2>
//               <div className="menu-icon-leads">&#8942;</div>
//               <button className="add-button">+ Adicionar</button>
//               {leadsByTopic["discussion"]?.map((leadInfo: any) => (
//                 <div
//                   className="info-section discussion-column"
//                   style={{ marginBottom: "10px" }}
//                   onClick={openModal}
//                   key={leadInfo?._id}
//                 >
//                   <p>{leadInfo.company}</p>
//                   <div className="icons-section">
//                     <img src={clip} alt="Ícone 1" />
//                     <span className="last-number">
//                       {leadInfo?.files.length}
//                     </span>
//                     <img src={message} alt="Ícone 2" />
//                     <span>{leadInfo?.activity.length}</span>
//                   </div>
//                   <img src={avatar} alt="Ícone 3" className="right-icon" />
//                 </div>
//               ))}
//             </div>

//             <div className="kanban-column">
//               <h2>Tomada de Decisão</h2>
//               <div className="menu-icon-leads">&#8942;</div>
//               <button className="add-button">+ Adicionar</button>
//               {leadsByTopic["decision"]?.map((leadInfo: any) => (
//                 <div
//                   className="info-section decision-column"
//                   style={{ marginBottom: "10px" }}
//                   onClick={openModal}
//                   key={leadInfo?._id}
//                 >
//                   <p>{leadInfo.company}</p>
//                   <div className="icons-section">
//                     <img src={clip} alt="Ícone 1" />
//                     <span className="last-number">
//                       {leadInfo?.files.length}
//                     </span>
//                     <img src={message} alt="Ícone 2" />
//                     <span>{leadInfo?.activity.length}</span>
//                   </div>
//                   <img src={avatar} alt="Ícone 3" className="right-icon" />
//                 </div>
//               ))}
//             </div>
//             <div className="kanban-column">
//               <h2>Contrato</h2>
//               <div className="menu-icon-leads">&#8942;</div>
//               <button className="add-button">+ Adicionar</button>
//               {leadsByTopic["contract"]?.map((leadInfo: any) => (
//                 <div
//                   className="info-section contract-column"
//                   style={{ marginBottom: "10px" }}
//                   onClick={openModal}
//                   key={leadInfo?._id}
//                 >
//                   <p>{leadInfo.company}</p>
//                   <div className="icons-section">
//                     <img src={clip} alt="Ícone 1" />
//                     <span className="last-number">
//                       {leadInfo?.files.length}
//                     </span>
//                     <img src={message} alt="Ícone 2" />
//                     <span>{leadInfo?.activity.length}</span>
//                   </div>
//                   <img src={avatar} alt="Ícone 3" className="right-icon" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//       {isModalOpen && <LeadModal closeModal={closeModal} />}
//     </>
//   );
// };

// export default Leads;

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
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

const Leads = () => {
  const leadsData = useSelector((state: any) => state.leads);
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showKanban, setShowKanban] = useState(false);
  const [columnTitle, setColumnTitle] = useState("");
  const [cardId, setCardId] = useState("");

  const [columns, setColumns] = useState(leadsData);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onDragEnd = (result) => {
    const newColumns = dragEnd(columns, result);
    setColumns(newColumns);
  };

  const handleShowKanban = () => {
    setShowKanban(true);
  };

  const handleShowList = () => {
    setShowKanban(false);
  };

  const addNewColumn = async () => {
    if(columnTitle === "") return;
    const newColumn = {
      title: columnTitle,
      items: [],
    };

    const response = await authApi.post("/leads", newColumn);
    if(response.status === 201) {
      const newColumns = [...columns, response.data];
      dispatch(leadsActions.updateLeads(newColumns));
      setColumns(newColumns);
    }
  };

  const handleCreateItem = async (data) => {
    const response = await authApi.post(`/leads/${cardId}/items`, { content: data.name });
    const newColumns = columns.map(column => {
      if(column._id === cardId) {
        // column.items.push(response.data);
        column = response.data;
      }
      return column;
    });

    dispatch(leadsActions.updateLeads(newColumns));
    setColumns(newColumns);

  };

  const handleModalOpen = (e) => {
    setCardId(e.target.id);
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
            <LeadPopover >
              <input type="text" placeholder="Nova Coluna" onChange={(e) => {setColumnTitle(e.target.value)}}/>
              <button onClick={(e) => addNewColumn()}>Adicionar</button>
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
          <div
            className="kanban"
            style={{ display: "flex", justifyContent: "center" }}
          >
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
                          alignContent: "center",
                          alignItems: "center",
                          borderRadius: "10px",
                          margin: "10px",
                          backgroundColor: "rgb(254 254 254)",
                          boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                        }}
                        key={key}
                      >
                        <h1>{column.title}</h1>
                        <button id={column._id} onClick={(e) => {handleModalOpen(e)}}>Add Item</button>
                        <div
                          style={{
                            width: "264px",
                            height: "300px",
                            padding: "10px",
                          }}
                        >
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
                                    backgroundColor: "#fff",
                                    marginBottom: "10px",
                                    padding: "10px",
                                    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                    borderRadius: "5px",
                                    ...provided.draggableProps.style,
                                  }}
                                  onDoubleClick={() => setIsModalOpen(true)}
                                >
                                  {item.content}
                                </div>
                              )}
                            </Draggable>
                          ))}
                        </div>
                      </div>
                    )}
                  </Droppable>
                ) : null
              )}
            </DragDropContext>
            {isModalOpen && (
              <LeadModal closeModal={() => setIsModalOpen(false)} handleCreate={handleCreateItem} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads;