// LeadModal.tsx
import React, { useEffect, useRef, useState } from "react";
import "./leadmodal.css";
import { Edit, MessageCircleIcon, TrendingUpIcon  } from "../Image/icons";
import avatar from "../../components/Image/Avatar2.png";
import avatar3 from "../../components/Image/Avatar3.png";


interface LeadModalProps {
  closeModal: () => void;
  handleClick: (values: {
    _id: string;
    title: string;
    comments: string;
  }) => Promise<void>;
  data: any;
}

const LeadModal: React.FC<LeadModalProps> = ({ closeModal, handleClick, data }) => {
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

  const [values, setValues] = useState(data);

  const handleUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  // melhorar depois
  const handleClickBtn = () => {
    handleClick(values);
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
              <Edit />
              Editar
            </button>
            <button 
              className={activeTab === "Atividade" ? "active" : ""}
              onClick={() => setActiveTab("Atividade")}
            >
              <TrendingUpIcon/>
              Atividade
            </button>
          </div>
        </div>
        <div className="modal-content">
          {activeTab === "Editar" && (
            <>
            <div  className="input-group-modal">
              <label>Título do card</label>
              <input className="input-title" type="text" name="title" defaultValue={values?.title} placeholder="" onChange={handleUpdateField} />
              </div>
              {/* <label>Contato</label>
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
              </div> */}
              <div className="input-group-modal">
              <label>Comentários</label>
              <div className="comentario-container">
                <input
                  type="text"
                  className="input-lead"
                  placeholder="Escreva um comentário"
                  defaultValue={values?.comments}
                  name="comments"
                  onChange={handleUpdateField}
                />
                <button className="blue-button-modal" onClick={handleClickBtn}>Atualizar</button>
              </div>
              </div>
            </>
          )}
          {activeTab === "Atividade" && (
            <>
              <div className="activity-section">
                {activities?.map((activity, index) => (
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
