// LeadModal.tsx
import React, { useRef, useState } from "react";
import "./leadmodal.css";
import edit from "../../components/Image/edit.svg";
import treding from "../../components/Image/trending-up.svg";
import avatar from "../../components/Image/Avatar2.png";
import avatar3 from "../../components/Image/Avatar3.png";
import message from "../../components/Image/message-circle-2.svg";

interface LeadModalProps {
  closeModal: () => void;
  handleCreate: (data: any) => void;
}

const LeadModal: React.FC<LeadModalProps> = ({ closeModal, handleCreate }) => {
  const [activeTab, setActiveTab] = useState<"Editar" | "Atividade">("Editar");
  const [activities, setActivities] = useState<
    Array<{ name: string; time: string; image: string }>
  >([
    { name: "Jordan", time: "10:00 AM", image: avatar },
    { name: "Diana", time: "12:30 AM", image: avatar3 },
    { name: "Martian", time: "11:00 AM", image: avatar },
    { name: "Clark", time: "8:30 PM", image: avatar3 },
    { name: "Ray", time: "7:17 AM", image: avatar },
    { name: "Barry", time: "3:00 PM", image: avatar3 },
  ]);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const [client, setClient] = useState("");

  const itemRef = useRef({});

  const createItem = () => {
    
    const refData = itemRef.current = {
      ...itemRef.current,
      name: client,
    }

    handleCreate(refData);

  }

  return (
    <div className="lead-modal-overlay" onClick={closeModal}>
      <div className="lead-modal" onClick={handleModalClick}>
        <div className="modal-header">
          <div className="modal-tabs">
            <button
              className={activeTab === "Editar" ? "active" : ""}
              onClick={() => setActiveTab("Editar")}
            >
              <img src={edit} alt="Editar" />
              Editar
            </button>
            <button
              className={activeTab === "Atividade" ? "active" : ""}
              onClick={() => setActiveTab("Atividade")}
            >
              <img src={treding} alt="Atividade" />
              Atividade
            </button>
          </div>
        </div>
        <div className="modal-content">
          {activeTab === "Editar" && (
            <>
              <label>Cliente</label>
              <input type="text" placeholder="Café dois irmãos" onChange={(e) => {setClient(e.target.value)}}/>

              <label>Contato</label>
              <input type="text" placeholder="Marcos Batista" />

              <label>CPNJ/CPF</label>
              <input type="text" placeholder="000000" />

              <label>Endereço</label>
              <input
                type="text"
                placeholder="Rua Pedro Almeira, 25, sala 302 | CEP"
              />

              <div className="image-section">
                <div className="assignado-section">
                  <span>Assignado:</span>
                  <img src={avatar} alt="Assignado" />
                </div>
                <div className="abrir-conversa-section">
                  <span>Abrir conversa com cliente:</span>
                  <img src={message} alt="Abrir conversa" />
                </div>
              </div>

              <div className="anexo-section">
                <span>Anexo</span>
                <div className="anexo-content">
                  <button>Arquivo</button>
                  <label>Nenhum arquivo selecionado</label>
                </div>
              </div>

              <label>Comentários</label>
              <div className="comentario-container">
                <input
                  type="text"
                  className="comentario-input"
                  placeholder="Escreva um comentário"
                />
                <button className="blue-button" onClick={createItem}>Atualizar</button>
              </div>
            </>
          )}
          {activeTab === "Atividade" && (
            <>
              <div className="activity-section">
                {activities.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <img
                      src={activity.image}
                      alt={`Imagem de ${activity.name}`}
                    />
                    <div className="activity-details">
                      <p>{activity.name}</p>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadModal;
