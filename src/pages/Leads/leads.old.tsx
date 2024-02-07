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